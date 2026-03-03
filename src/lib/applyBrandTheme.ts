/**
 * Apply tenant brand theme by setting CSS variables on the document.
 * Multiple tenants can have different colors/fonts; this applies the active one.
 */

export interface BrandTheme {
  /** Primary (headlines, CTAs) */
  colorPrimary?: string
  colorPrimaryForeground?: string
  colorSecondary?: string
  colorMuted?: string
  colorMutedForeground?: string
  colorBackground?: string
  colorSurface?: string
  colorBorder?: string
  colorBorderStrong?: string
  colorAccent?: string
  colorCardFrom?: string
  colorCardTo?: string
  /** Section alert badge (e.g. Core Problem) */
  colorSectionAlert?: string
  colorSectionAlertBg?: string
  colorSectionAlertBorder?: string
  /** Section solution badge (e.g. Networkr Solution) */
  colorSectionSolution?: string
  colorSectionSolutionBg?: string
  colorSectionSolutionBorder?: string
  /** Section value badge (e.g. Strategic Value) */
  colorSectionValue?: string
  colorSectionValueBg?: string
  colorSectionValueBorder?: string
  /** Section implementation badge (e.g. Implementation — purple) */
  colorSectionImplementation?: string
  colorSectionImplementationBg?: string
  colorSectionImplementationBorder?: string
  colorCheckSuccess?: string
  colorCheckSuccessBg?: string
  colorButtonPrimaryBg?: string
  colorButtonPrimaryText?: string
  colorButtonPrimaryHoverBg?: string
  colorButtonSecondaryBorder?: string
  colorButtonSecondaryText?: string
  /** Font families (CSS value) */
  fontSans?: string
  fontDisplay?: string
  /** Radii (e.g. "9999px", "1.5rem") */
  radiusPill?: string
  radiusCard?: string
  radiusTag?: string
  /** Optional: grid / effects */
  gridSize?: string
  gridOpacity?: string
  gradientBlobOpacity?: string
}

const themeVarMap: Array<[keyof BrandTheme, string]> = [
  ['colorPrimary', '--color-primary'],
  ['colorPrimaryForeground', '--color-primary-foreground'],
  ['colorSecondary', '--color-secondary'],
  ['colorMuted', '--color-muted'],
  ['colorMutedForeground', '--color-muted-foreground'],
  ['colorBackground', '--color-background'],
  ['colorSurface', '--color-surface'],
  ['colorBorder', '--color-border'],
  ['colorBorderStrong', '--color-border-strong'],
  ['colorAccent', '--color-accent'],
  ['colorCardFrom', '--color-card-from'],
  ['colorCardTo', '--color-card-to'],
  ['colorSectionAlert', '--color-section-alert'],
  ['colorSectionAlertBg', '--color-section-alert-bg'],
  ['colorSectionAlertBorder', '--color-section-alert-border'],
  ['colorSectionSolution', '--color-section-solution'],
  ['colorSectionSolutionBg', '--color-section-solution-bg'],
  ['colorSectionSolutionBorder', '--color-section-solution-border'],
  ['colorSectionValue', '--color-section-value'],
  ['colorSectionValueBg', '--color-section-value-bg'],
  ['colorSectionValueBorder', '--color-section-value-border'],
  ['colorSectionImplementation', '--color-section-implementation'],
  ['colorSectionImplementationBg', '--color-section-implementation-bg'],
  ['colorSectionImplementationBorder', '--color-section-implementation-border'],
  ['colorCheckSuccess', '--color-check-success'],
  ['colorCheckSuccessBg', '--color-check-success-bg'],
  ['colorButtonPrimaryBg', '--color-button-primary-bg'],
  ['colorButtonPrimaryText', '--color-button-primary-text'],
  ['colorButtonPrimaryHoverBg', '--color-button-primary-hover-bg'],
  ['colorButtonSecondaryBorder', '--color-button-secondary-border'],
  ['colorButtonSecondaryText', '--color-button-secondary-text'],
  ['fontSans', '--font-sans'],
  ['fontDisplay', '--font-display'],
  ['radiusPill', '--radius-pill'],
  ['radiusCard', '--radius-card'],
  ['radiusTag', '--radius-tag'],
  ['gridSize', '--grid-size'],
  ['gridOpacity', '--grid-opacity'],
  ['gradientBlobOpacity', '--gradient-blob-opacity'],
]

function getRoot(target: HTMLElement | Document): HTMLElement {
  return target instanceof Document ? target.documentElement : target
}

/**
 * Apply a brand theme to the document root. Only sets variables that are defined on the theme.
 * Call this when the tenant changes (e.g. from tenantStore).
 */
export function applyBrandTheme(theme: BrandTheme | null, target: HTMLElement | Document = document): void {
  const root = getRoot(target)
  if (!theme) return
  for (const [key, cssVar] of themeVarMap) {
    const value = theme[key]
    if (value != null && value !== '') {
      root.style.setProperty(cssVar, value)
    }
  }
}

/**
 * Clear any applied brand theme (resets to stylesheet defaults).
 */
export function clearBrandTheme(target: HTMLElement | Document = document): void {
  const root = getRoot(target)
  for (const [, cssVar] of themeVarMap) {
    root.style.removeProperty(cssVar)
  }
}
