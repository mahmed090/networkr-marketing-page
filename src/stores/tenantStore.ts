import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { BrandTheme } from "../lib/applyBrandTheme";
import { applyBrandTheme } from "../lib/applyBrandTheme";
import {
  getConfig,
  getTenantIdFromDomain,
  getTenantIdFromUrl,
} from "../utils/config";
import { getSiteData } from "../utils/data";
import type { SiteData } from "../utils/data";

const DEFAULT_TENANT_ID = "default";

export interface TenantState {
  /** Current tenant id (from domain or persisted); e.g. "uet-peshawar", "numl" */
  tenantId: string;
  /** Brand theme for current tenant — applied to document when set */
  brandTheme: BrandTheme | null;
  /** Resolved site data for current tenant */
  siteData: SiteData;
  setTenantId: (id: string) => void;
  setBrandTheme: (theme: BrandTheme | null) => void;
  /** Initialize from domain + config: resolves tenant from current hostname, updates store and storage */
  initFromConfig: () => void;
}

export const useTenantStore = create<TenantState>()(
  persist(
    (set) => ({
      tenantId: DEFAULT_TENANT_ID,
      brandTheme: null,
      siteData: getSiteData(DEFAULT_TENANT_ID),

      setTenantId(id: string) {
        const siteData = getSiteData(id);
        set({ tenantId: id, siteData });
      },

      setBrandTheme(theme: BrandTheme | null) {
        set({ brandTheme: theme });
        applyBrandTheme(theme);
      },

      initFromConfig() {
        // For local testing: ?tenant=numl overrides; else use domain → config
        const tenantFromUrl = getTenantIdFromUrl();
        const tenantFromDomain = getTenantIdFromDomain();
        const config = getConfig();
        const tenantId = tenantFromUrl ?? config.tenantId ?? tenantFromDomain;
        const siteData = getSiteData(tenantId);
        set({ tenantId, siteData });
        applyTenantTheme(tenantId);
      },
    }),
    {
      name: "networkr-tenant",
      partialize: (s) => ({ tenantId: s.tenantId }),
      onRehydrateStorage: () => (state, err) => {
        if (err || !state) return;
        // After rehydration, sync siteData from persisted tenantId so state is consistent
        const siteData = getSiteData(state.tenantId);
        useTenantStore.setState({ siteData });
      },
    },
  ),
);

/** Get theme for a tenant id. Extend this map with your tenant themes. */
const tenantThemes: Record<string, BrandTheme> = {
  default: {
    colorPrimary: "#000000",
    colorPrimaryForeground: "#ffffff",
    colorSecondary: "#6b7280",
    colorMuted: "#9ca3af",
    colorBackground: "#ffffff",
    colorSurface: "#f9fafb",
    colorBorder: "#f3f4f6",
    colorBorderStrong: "#e5e7eb",
    colorSectionAlert: "#b45309",
    colorSectionAlertBg: "#fff7ed",
    colorSectionAlertBorder: "#fed7aa",
    colorSectionSolution: "#15803d",
    colorSectionSolutionBg: "#f0fdf4",
    colorSectionSolutionBorder: "#bbf7d0",
    colorSectionValue: "#1d4ed8",
    colorSectionValueBg: "#eff6ff",
    colorSectionValueBorder: "#bfdbfe",
    colorSectionImplementation: "#6d28d9",
    colorSectionImplementationBg: "#f5f3ff",
    colorSectionImplementationBorder: "#ddd6fe",
    colorCheckSuccess: "#16a34a",
    colorCheckSuccessBg: "#dcfce7",
    fontSans: '"Inter", "Helvetica Neue", Arial, sans-serif',
    fontDisplay: '"Playfair Display", "Georgia", serif',
    radiusPill: "9999px",
    radiusCard: "1.5rem",
    radiusTag: "9999px",
  },
};

/**
 * Get brand theme for a tenant and apply it. Call after setTenantId or on init.
 */
export function applyTenantTheme(tenantId: string): void {
  const theme = tenantThemes[tenantId] ?? tenantThemes.default;
  useTenantStore.getState().setBrandTheme(theme);
}
