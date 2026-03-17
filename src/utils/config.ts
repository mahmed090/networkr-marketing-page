/**
 * Portal / app config — used to configure the tenant store and app behavior.
 * White-label: domain → tenant mapping so visiting networkr-uet-peshawar.vercel.app
 * shows UET Peshawar content and tenant "uet-peshawar"; storage updates when domain changes.
 */

export interface PortalConfig {
  /** Active tenant id for white-labeling (used to resolve data + theme) */
  tenantId: string
  /** Optional API base for portal/backend */
  apiBaseUrl?: string
  /** Feature flags or other portal settings */
  features?: Record<string, boolean>
}

/** Map deployment hostname → tenant id. Add entries for each white-label domain. */
export const DOMAIN_TO_TENANT: Record<string, string> = {
  'networkr-uet-peshawar.vercel.app': 'uet-peshawar',
  'networkr-numl.vercel.app': 'numl',
  'networkr-im-sciences.vercel.app': 'im-sciences',
  'networkr-sarhad-university.vercel.app': 'sarhad-university',
  'networkr-wah-university.vercel.app': 'wah-university',
  'networkr-cecos.vercel.app': 'cecos',
  'networkr-air-university.vercel.app': 'air-university',
  'networkr-kmu-university.vercel.app': 'kmu-university',
  // local dev: optional
  'localhost': 'default',
}

const DEFAULT_TENANT_ID = 'default'

/**
 * Resolve tenant id from current hostname (browser) or a given host.
 * Used on app init so the persisted tenant store updates per domain.
 */
export function getTenantIdFromDomain(host?: string): string {
  const hostname =
    host ?? (typeof window !== 'undefined' ? window.location.hostname : '')
  return DOMAIN_TO_TENANT[hostname] ?? DEFAULT_TENANT_ID
}

/** Query param key for local testing (e.g. ?tenant=numl). */
export const TENANT_QUERY_KEY = 'tenant'

/**
 * Resolve tenant id from URL search params (for local testing).
 * e.g. http://localhost:5173/?tenant=numl → "numl"
 * Returns undefined if param is missing or empty.
 */
export function getTenantIdFromUrl(): string | undefined {
  if (typeof window === 'undefined') return undefined
  const params = new URLSearchParams(window.location.search)
  const value = params.get(TENANT_QUERY_KEY)?.trim()
  return value || undefined
}

const defaultConfig: PortalConfig = {
  tenantId: DEFAULT_TENANT_ID,
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL ?? '',
  features: {},
}

let resolvedConfig: PortalConfig | null = null

/**
 * Get portal config. Tenant is resolved from domain first, then from VITE_TENANT_ID.
 * Use this to configure the tenant store on app init.
 */
export function getConfig(): PortalConfig {
  if (resolvedConfig) return resolvedConfig
  const tenantFromDomain =
    typeof window !== 'undefined' ? getTenantIdFromDomain() : DEFAULT_TENANT_ID
  const tenantFromEnv = import.meta.env.VITE_TENANT_ID
  const tenantId =
    typeof tenantFromEnv === 'string' && tenantFromEnv
      ? tenantFromEnv
      : tenantFromDomain
  resolvedConfig = {
    ...defaultConfig,
    tenantId,
    apiBaseUrl: import.meta.env.VITE_API_BASE_URL ?? defaultConfig.apiBaseUrl,
  }
  return resolvedConfig
}

/**
 * Set config (e.g. after loading from portal API). Updates the resolved config used by getConfig().
 */
export function setConfig(config: Partial<PortalConfig>): void {
  resolvedConfig = resolvedConfig
    ? { ...resolvedConfig, ...config }
    : { ...defaultConfig, ...config }
}
