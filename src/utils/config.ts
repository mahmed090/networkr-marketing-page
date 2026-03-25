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
  // Lahore universities (white-label)
  'networkr-pu-lahore.vercel.app': 'pu-lahore',
  'networkr-uet-lahore.vercel.app': 'uet-lahore',
  'networkr-lums-lahore.vercel.app': 'lums-lahore',
  'networkr-fccu-lahore.vercel.app': 'fccu-lahore',
  'networkr-kinnaird-college-lahore.vercel.app': 'kinnaird-college-lahore',
  'networkr-uol-lahore.vercel.app': 'uol-lahore',
  'networkr-ucp-lahore.vercel.app': 'ucp-lahore',
  'networkr-fast-nuces-lahore.vercel.app': 'fast-nuces-lahore',
  'networkr-aimc-lahore.vercel.app': 'aimc-lahore',
  'networkr-kemu-lahore.vercel.app': 'kemu-lahore',
  'networkr-cmh-lahore.vercel.app': 'cmh-lahore',
  'networkr-fjmu-lahore.vercel.app': 'fjmu-lahore',
  'networkr-lmdc-lahore.vercel.app': 'lmdc-lahore',
  'networkr-fmh-lahore.vercel.app': 'fmh-lahore',
  'networkr-itu-lahore.vercel.app': 'itu-lahore',
  'networkr-lgs-lahore.vercel.app': 'lgs-lahore',
  'networkr-riu-lahore.vercel.app': 'riu-lahore',
  'networkr-riphah-lahore.vercel.app': 'riphah-lahore',
  'networkr-numl-lahore.vercel.app': 'numl-lahore',
  'networkr-umt-lahore.vercel.app': 'umt-lahore',
  'networkr-superior-lahore.vercel.app': 'superior-lahore',
  'networkr-comsats-lahore.vercel.app': 'comsats-lahore',
  'networkr-bnu-lahore.vercel.app': 'bnu-lahore',
  'networkr-nca-lahore.vercel.app': 'nca-lahore',
  'networkr-umc-lahore.vercel.app': 'umc-lahore',
  // Islamabad universities (white-label)
  'networkr-qau-isl.vercel.app': 'qau-isl',
  'networkr-nust-isl.vercel.app': 'nust-isl',
  'networkr-aiou-isl.vercel.app': 'aiou-isl',
  'networkr-iiui-isl.vercel.app': 'iiui-isl',
  'networkr-comsats-isl.vercel.app': 'comsats-isl',
  'networkr-numl-isl.vercel.app': 'numl-isl',
  'networkr-uet-taxila-isl.vercel.app': 'uet-taxila-isl',
  'networkr-bahria-university-isl.vercel.app': 'bahria-university-isl',
  'networkr-air-university-isl.vercel.app': 'air-university-isl',
  'networkr-rmu-isl.vercel.app': 'rmu-isl',
  'networkr-nums-isl.vercel.app': 'nums-isl',
  'networkr-pieas-isl.vercel.app': 'pieas-isl',
  'networkr-ndu-isl.vercel.app': 'ndu-isl',
  'networkr-ist-isl.vercel.app': 'ist-isl',
  'networkr-szabmu-isl.vercel.app': 'szabmu-isl',
  'networkr-nutech-isl.vercel.app': 'nutech-isl',
  'networkr-fui-isl.vercel.app': 'fui-isl',
  'networkr-federal-urdu-isl.vercel.app': 'federal-urdu-isl',
  'networkr-pide-isl.vercel.app': 'pide-isl',
  'networkr-giki-isl.vercel.app': 'giki-isl',
  'networkr-fast-nuces-isl.vercel.app': 'fast-nuces-isl',
  'networkr-riphah-isl.vercel.app': 'riphah-isl',
  'networkr-cust-isl.vercel.app': 'cust-isl',
  'networkr-stmu-isl.vercel.app': 'stmu-isl',
  'networkr-hamdard-isl.vercel.app': 'hamdard-isl',
  'networkr-iqra-isl.vercel.app': 'iqra-isl',
  'networkr-szabist-isl.vercel.app': 'szabist-isl',
  'networkr-myu-isl.vercel.app': 'myu-isl',
  'networkr-abasyn-isl.vercel.app': 'abasyn-isl',
  'networkr-preston-isl.vercel.app': 'preston-isl',
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
