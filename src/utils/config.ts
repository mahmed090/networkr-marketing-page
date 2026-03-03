/**
 * Portal / app config — used to configure the tenant store and app behavior.
 * Can be loaded from env, a config endpoint, or static JSON.
 */

export interface PortalConfig {
  /** Active tenant id for white-labeling (used to resolve data + theme) */
  tenantId: string
  /** Optional API base for portal/backend */
  apiBaseUrl?: string
  /** Feature flags or other portal settings */
  features?: Record<string, boolean>
}

const defaultConfig: PortalConfig = {
  tenantId: 'default',
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL ?? '',
  features: {},
}

let resolvedConfig: PortalConfig | null = null

/**
 * Get portal config. Use this to configure the tenant store on app init.
 * Can be extended to load from API or env.
 */
export function getConfig(): PortalConfig {
  if (resolvedConfig) return resolvedConfig
  const tenantFromEnv = import.meta.env.VITE_TENANT_ID
  resolvedConfig = {
    ...defaultConfig,
    tenantId: typeof tenantFromEnv === 'string' && tenantFromEnv ? tenantFromEnv : defaultConfig.tenantId,
    apiBaseUrl: import.meta.env.VITE_API_BASE_URL ?? defaultConfig.apiBaseUrl,
  }
  return resolvedConfig
}

/**
 * Set config (e.g. after loading from portal API). Updates the resolved config used by getConfig().
 */
export function setConfig(config: Partial<PortalConfig>): void {
  resolvedConfig = resolvedConfig ? { ...resolvedConfig, ...config } : { ...defaultConfig, ...config }
}
