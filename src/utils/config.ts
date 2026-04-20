/**
 * Portal / app config — used to configure the tenant store and app behavior.
 * White-label: domain → tenant mapping so visiting join.uet-pew.networkrai.com
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
  'join.abasyn.networkrai.com': 'abasyn-isl',
  'join.aimc.networkrai.com': 'aimc-lahore',
  'join.aiou.networkrai.com': 'aiou-isl',
  'join.air-isb.networkrai.com': 'air-university-isl',
  'join.air-multan.networkrai.com': 'air-university',
  'join.bahria.networkrai.com': 'bahria-university-isl',
  'join.bnu.networkrai.com': 'bnu-lahore',
  'join.cecos.networkrai.com': 'cecos',
  'join.cmh.networkrai.com': 'cmh-lahore',
  'join.comsats-lhr.networkrai.com': 'comsats-lahore',
  'join.comsats-isb.networkrai.com': 'comsats-isl',
  'join.cust.networkrai.com': 'cust-isl',
  'join.fast-isb.networkrai.com': 'fast-nuces-isl',
  'join.fast-lhr.networkrai.com': 'fast-nuces-lahore',
  'join.fccu.networkrai.com': 'fccu-lahore',
  'join.fjmu.networkrai.com': 'fjmu-lahore',
  'join.fmh.networkrai.com': 'fmh-lahore',
  'join.fui.networkrai.com': 'fui-isl',
  'join.fuuast.networkrai.com': 'federal-urdu-isl',
  'join.giki.networkrai.com': 'giki-isl',
  'join.hamdard.networkrai.com': 'hamdard-isl',
  'join.iiui.networkrai.com': 'iiui-isl',
  'join.imsciences.networkrai.com': 'im-sciences',
  'join.iqra.networkrai.com': 'iqra-isl',
  'join.ist.networkrai.com': 'ist-isl',
  'join.itu.networkrai.com': 'itu-lahore',
  'join.kemu.networkrai.com': 'kemu-lahore',
  'join.kinnaird.networkrai.com': 'kinnaird-college-lahore',
  'join.kmu.networkrai.com': 'kmu-university',
  'join.lgs.networkrai.com': 'lgs-lahore',
  'join.lmdc.networkrai.com': 'lmdc-lahore',
  'join.lums.networkrai.com': 'lums-lahore',
  'join.myu.networkrai.com': 'myu-isl',
  'join.nca.networkrai.com': 'nca-lahore',
  'join.ndu.networkrai.com': 'ndu-isl',
  'join.numl-isb.networkrai.com': 'numl-isl',
  'join.numl-lhr.networkrai.com': 'numl-lahore',
  'join.nums.networkrai.com': 'nums-isl',
  'join.nust.networkrai.com': 'nust-isl',
  'join.nutech.networkrai.com': 'nutech-isl',
  'join.pieas.networkrai.com': 'pieas-isl',
  'join.preston.networkrai.com': 'preston-isl',
  'join.pu.networkrai.com': 'pu-lahore',
  'join.qau.networkrai.com': 'qau-isl',
  'join.riphah-isb.networkrai.com': 'riphah-isl',
  'join.riphah-lhr.networkrai.com': 'riphah-lahore',
  'join.rmu.networkrai.com': 'rmu-isl',
  'join.roots.networkrai.com': 'riu-lahore',
  'join.sarhad.networkrai.com': 'sarhad-university',
  'join.stmu.networkrai.com': 'stmu-isl',
  'join.superior.networkrai.com': 'superior-lahore',
  'join.szabist.networkrai.com': 'szabist-isl',
  'join.szabmu.networkrai.com': 'szabmu-isl',
  'join.ucp.networkrai.com': 'ucp-lahore',
  'join.uet-lhr.networkrai.com': 'uet-lahore',
  'join.uet-pew.networkrai.com': 'uet-peshawar',
  'join.uet-txl.networkrai.com': 'uet-taxila-isl',
  'join.umc.networkrai.com': 'umc-lahore',
  'join.umt.networkrai.com': 'umt-lahore',
  'join.uol.networkrai.com': 'uol-lahore',
  'join.wah.networkrai.com': 'wah-university',
  'join.uohr.networkrai.com': 'uohr',
  'join.uet-mrd.networkrai.com': 'uet-mrd',
  'join.icp.networkrai.com': 'icp',
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
