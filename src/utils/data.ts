/**
 * Site copy and static data — can be keyed by tenant for white-labeling.
 * Define JSON-like content here; optionally override per tenantId.
 */

export interface NavLink {
  label: string;
  hash: string;
}

export interface HeroHeadlinePart {
  text: string;
  italic?: boolean;
}

export interface HeroProblemColumn {
  title: string;
  description: string;
}

export interface HeroData {
  tag: string;
  headlineParts: HeroHeadlinePart[];
  tagline: string;
  ctaPrimary: { label: string; hash: string };
  ctaSecondary: { label: string; hash: string };
  card: {
    intro: string;
    boldInIntro: string;
    introRest: string;
    columns: HeroProblemColumn[];
  };
  bottomLine: string;
  bottomLineBold: string[];
  scrollLabel: string;
}

/** Icon name for Core Problem cards — maps to Lucide icon component */
export type CoreProblemIconName = "building2" | "users" | "graduation-cap";

export interface CoreProblemCard {
  icon: CoreProblemIconName;
  title: string;
  description: string;
}

export interface CoreProblemData {
  badge: string;
  headline: string;
  headlineItalic: string;
  subtitle: string;
  cards: CoreProblemCard[];
}

/** Icon name for Solution feature cards — maps to Lucide icon component */
export type SolutionIconName = "shield" | "sparkles" | "settings";

export interface SolutionFeatureCard {
  icon: SolutionIconName;
  title: string;
  description: string;
  learnMoreText: string;
  /** Optional bullet points (e.g. for the highlighted middle card) */
  bulletPoints?: string[];
  /** When true, card uses dark/primary background */
  highlighted?: boolean;
}

export interface SolutionData {
  badge: string;
  headline: string;
  headlineItalic: string;
  /** Optional logo URL for section title (shown on the right) */
  universityLogo?: string;
  universityName: string;
  subtitle: string;
  cards: SolutionFeatureCard[];
}

/** Icon name for Strategic Value benefits — maps to Lucide icon component */
export type StrategicValueIconName =
  | "trending-up"
  | "users"
  | "target"
  | "award"
  | "layers";

export interface StrategicValueBenefit {
  icon: StrategicValueIconName;
  text: string;
}

export interface StrategicValueData {
  badge: string;
  headline: string;
  headlineItalic: string;
  /** Short tagline below headline */
  tagline: string;
  /** Body paragraph; use [Institution Name] as placeholder, replaced with siteData.institutionName or brandName */
  body: string;
  /** Closing quote block */
  quote: string;
  /** Optional: legacy benefits list (e.g. for alternate layouts) */
  benefits?: StrategicValueBenefit[];
  diagramCaption?: string;
  diagramCenterLabel?: string;
  /** Legacy intro line */
  intro?: string;
}

/** Icon name for Implementation steps — maps to Lucide icon component */
export type ImplementationStepIconName = "database" | "palette" | "shield";

export interface ImplementationStep {
  icon: ImplementationStepIconName;
  title: string;
  description: string;
}

export interface ImplementationData {
  badge: string;
  headline: string;
  headlineItalic: string;
  subtitle: string;
  requirementsTitle: string;
  requirements: string[];
  steps: ImplementationStep[];
}

/** Icon name for Matters Now cards — maps to Lucide icon component */
export type MattersNowCardIconName = "lock" | "zap";

export interface MattersNowCard {
  icon: MattersNowCardIconName;
  /** Optional bold lead-in (e.g. "Networkr provides that system.") */
  boldPrefix?: string;
  text: string;
}

export interface MattersNowData {
  badge: string;
  headline: string;
  headlineItalic: string;
  cards: MattersNowCard[];
}

export interface PartnerOpportunityData {
  badge: string;
  headline: string;
  headlineItalic: string;
  /** Shown dynamically; fallback can use siteData.institutionName */
  universityName: string;
  cardLabel: string;
  /** First paragraph (standalone sentence). */
  paragraphFirst: string;
  /** Second paragraph before bold phrase; use [University Name] placeholder. */
  paragraphSecondPrefix: string;
  /** Bold phrase in second paragraph. */
  paragraphSecondBold: string;
  /** Second paragraph after bold phrase. */
  paragraphSecondSuffix: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
}

/** Icon name for About Networkr stat cards — maps to Lucide icon component */
export type AboutNetworkrStatIconName = "users" | "building" | "graduation-cap";

export interface AboutNetworkrStat {
  icon: AboutNetworkrStatIconName;
  value: string;
  label: string;
}

export interface AboutNetworkrData {
  badge: string;
  headline: string;
  headlineItalic: string;
  tagline: string;
  stats: AboutNetworkrStat[];
  features: string[];
}

export interface NextStepData {
  badge: string;
  headline: string;
  headlineItalic: string;
  paragraph: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  /** Footer tagline after the brand name (e.g. "The Handshake for Alumni Networks") */
  footerTagline: string;
}

export interface FooterData {
  logo: string;
  /** Short description under the logo */
  tagline: string;
  /** Badge text (e.g. "Now onboarding select institutions") */
  onboardingBadge: string;
  /** Copyright line */
  copyright: string;
  /** Tagline in bottom bar (e.g. "The Handshake for Alumni Networks") */
  handshakeTagline: string;
  backToTopLabel: string;
  /** Newsletter signup (right side of footer) */
  newsletter: {
    heading: string;
    placeholder: string;
    submitLabel: string;
  };
}

/** SEO and document head — per tenant for white-label (title, meta, og, twitter). */
export interface SeoData {
  title: string;
  description: string;
  /** Optional; defaults to title */
  ogTitle?: string;
  ogDescription?: string;
  /** Absolute or path; e.g. /og-image.png or full URL */
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  twitterCard?: "summary" | "summary_large_image";
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  /** Canonical URL */
  canonical?: string;
}

export interface SiteData {
  brandName: string;
  logo: string;
  /** Institution name for copy (e.g. "UET Peshawar"); used in Strategic Value body placeholder */
  institutionName: string;
  navLinks: NavLink[];
  navCta: { label: string; hash: string };
  hero: HeroData;
  coreProblem: CoreProblemData;
  solution: SolutionData;
  strategicValue: StrategicValueData;
  implementation: ImplementationData;
  mattersNow: MattersNowData;
  partnerOpportunity: PartnerOpportunityData;
  aboutNetworkr: AboutNetworkrData;
  nextStep: NextStepData;
  footer: FooterData;
  /** SEO meta and document title — updated per tenant */
  seo: SeoData;
}

/** Tenant overrides: only specify keys you want to override; nested sections can be partial. */
export type SiteDataOverride = {
  [K in keyof SiteData]?: K extends
    | "hero"
    | "coreProblem"
    | "solution"
    | "strategicValue"
    | "implementation"
    | "mattersNow"
    | "partnerOpportunity"
    | "aboutNetworkr"
    | "nextStep"
    | "footer"
    | "seo"
    ? Partial<SiteData[K]>
    : SiteData[K];
};

const defaultHero: HeroData = {
  tag: "The Private Infrastructure for Alumni Power",
  headlineParts: [
    { text: "Private" },
    { text: "Infrastructure" },
    { text: "for" },
    { text: "Alumni", italic: true },
    { text: "Networks", italic: true },
  ],
  tagline: "Turning Alumni Data into Active Professional Capital",
  ctaPrimary: { label: "Activate Your Network", hash: "get-started" },
  ctaSecondary: { label: "Learn More", hash: "learn-more" },
  card: {
    intro:
      "Universities were the original trusted communities. Yet today, most alumni networks exist as ",
    boldInIntro: "static databases",
    introRest:
      ". Thousands of verified records. Minimal structured engagement. Limited measurable impact.",
    columns: [
      { title: "Students", description: "struggle to access mentorship" },
      {
        title: "Alumni",
        description: "disengage from public platforms due to noise",
      },
      {
        title: "Institutions",
        description: "cannot fully activate their most valuable asset",
      },
    ],
  },
  bottomLine:
    "Networkr converts alumni data into a managed professional network designed for ",
  bottomLineBold: ["trust", "relevance", "measurable engagement"],
  scrollLabel: "Scroll",
};

const defaultCoreProblem: CoreProblemData = {
  badge: "The Core Problem",
  headline: "The network ",
  headlineItalic: "exists",
  subtitle: "It is simply not activated.",
  cards: [
    {
      icon: "building2",
      title: "Universities",
      description:
        "Maintain decades of alumni records but lack the infrastructure to generate consistent interaction and professional exchange.",
    },
    {
      icon: "users",
      title: "Alumni",
      description:
        "Prefer trusted environments but avoid platforms that generate excessive outreach and low quality communication.",
    },
    {
      icon: "graduation-cap",
      title: "Students",
      description:
        "Depend on cold emails and informal introductions to seek career advice, often with very low response rates.",
    },
  ],
};

const defaultSolution: SolutionData = {
  badge: "The Networkr Solution",
  headline: "Activating the ",
  headlineItalic: "Alumni Network Of",
  universityLogo: "/uet-peshawar.png",
  universityName: "UET Peshawar",
  subtitle:
    "Networkr transforms your alumni database into a structured private professional network without increasing administrative burden.",
  cards: [
    {
      icon: "shield",
      title: "Verified Institutional Access",
      description:
        "We securely ingest registrar approved alumni records. Members claim existing profiles. Access remains restricted to verified university members only.",
      learnMoreText: "Learn more",
      highlighted: false,
    },
    {
      icon: "sparkles",
      title: "Intelligent Daily Recommendations",
      description:
        "Members receive curated introductions based on career goals, location, industry, and expertise. No searching required. Relevance is built into the system.",
      learnMoreText: "Learn more",
      bulletPoints: [
        "AI-powered matching",
        "Career goal alignment",
        "Industry & location based",
      ],
      highlighted: true,
    },
    {
      icon: "settings",
      title: "Controlled Engagement Capacity",
      description:
        "Alumni define how often they are available for conversations. The platform enforces those limits, ensuring meaningful interaction without overload.",
      learnMoreText: "Learn more",
      highlighted: false,
    },
  ],
};

const defaultStrategicValue: StrategicValueData = {
  badge: "Strategic Value",
  headline: "Strategic Value for the ",
  headlineItalic: "Institution",
  tagline:
    "Activating the alumni ecosystem creates measurable institutional impact.",
  body: "For [Institution Name], this means increased alumni participation, structured mentorship between graduates and students, and stronger career outcomes that can be tracked and reported. It strengthens the university's long term positioning by demonstrating an active, connected professional community rather than a passive alumni database.",
  quote:
    "Networkr functions as institutional infrastructure. It is not another portal that requires constant management or additional administrative workload.",
};

const defaultImplementation: ImplementationData = {
  badge: "Implementation",
  headline: "Simple ",
  headlineItalic: "Deployment",
  subtitle: "Typical implementation timeline is two to four weeks.",
  requirementsTitle: "Deployment requires:",
  requirements: [
    "No engineering team required",
    "No operational complexity added",
    "2-4 weeks typical timeline",
  ],
  steps: [
    {
      icon: "database",
      title: "Alumni Data Export",
      description:
        "Export alumni data from your registrar system. We handle secure integration.",
    },
    {
      icon: "palette",
      title: "Branding Alignment",
      description:
        "Customize the platform to match your institution's visual identity.",
    },
    {
      icon: "shield",
      title: "Compliance Review",
      description:
        "Standard compliance review to ensure data security and privacy.",
    },
  ],
};

const defaultMattersNow: MattersNowData = {
  badge: "Why This Matters Now",
  headline: "Professional communities are shifting toward ",
  headlineItalic: "trusted private environments",
  cards: [
    {
      icon: "lock",
      text: "Universities already possess powerful closed networks. What they lack is a system that activates them intelligently.",
    },
    {
      icon: "zap",
      boldPrefix: "Networkr provides that system.",
      text: " Purpose-built infrastructure for the modern era of professional networking.",
    },
  ],
};

const defaultPartnerOpportunity: PartnerOpportunityData = {
  badge: "Partnership Opportunity",
  headline: "Flagship ",
  headlineItalic: "Deployments",
  universityName: "UET Peshawar",
  cardLabel: "Select Group of Institutions",
  paragraphFirst:
    "We are onboarding a select group of institutions to establish flagship deployments.",
  paragraphSecondPrefix: "For [University Name], this means launching a ",
  paragraphSecondBold: "structured alumni activation initiative",
  paragraphSecondSuffix:
    " that strengthens student outcomes and long term alumni engagement.",
  ctaPrimary: { label: "Become a Partner", href: "#get-started" },
  ctaSecondary: { label: "Schedule a Demo", href: "#demo" },
};

const defaultAboutNetworkr: AboutNetworkrData = {
  badge: "About Networkr",
  headline: "Purpose-Built ",
  headlineItalic: "Infrastructure",
  tagline:
    "Networkr is purpose built alumni infrastructure designed specifically for universities.",
  stats: [
    { icon: "users", value: "200,000+", label: "Verified Alumni Profiles" },
    { icon: "building", value: "50+", label: "University Pipeline" },
    { icon: "graduation-cap", value: "100%", label: "Higher Ed Focus" },
  ],
  features: [
    "Verified alumni profiles ready for activation",
    "Multi university onboarding pipeline",
    "Built for higher education environments",
  ],
};

const defaultNextStep: NextStepData = {
  badge: "Next Step",
  headline: "Activate your alumni network within ",
  headlineItalic: "sixty days",
  paragraph:
    "Initiate a pilot deployment and transform your alumni database into an active professional network.",
  ctaPrimary: { label: "Start Pilot Deployment", href: "#get-started" },
  ctaSecondary: { label: "Book a Demo", href: "#demo" },
  footerTagline: "The Handshake for Alumni Networks",
};

const defaultFooter: FooterData = {
  tagline:
    "The Private Infrastructure for Alumni Power. Turning alumni data into active professional capital.",
  logo: "/logo.png",
  onboardingBadge: "Now onboarding select institutions",
  copyright: "© 2026 Networkr, Inc. All rights reserved.",
  handshakeTagline: "The Handshake for Alumni Networks",
  backToTopLabel: "Back to top",
  newsletter: {
    heading: "Stay in the loop",
    placeholder: "Enter your email",
    submitLabel: "Subscribe",
  },
};

const defaultSeo: SeoData = {
  title: "Networkr — The Private Infrastructure for Alumni Power",
  description:
    "Turning alumni data into active professional capital. Networkr transforms your alumni database into a structured private professional network.",
  ogTitle: "Networkr — The Private Infrastructure for Alumni Power",
  ogDescription:
    "Turning alumni data into active professional capital. Activate your alumni network.",
  ogImage: "/logo.png",
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterTitle: "Networkr — The Private Infrastructure for Alumni Power",
  twitterDescription:
    "Turning alumni data into active professional capital. Activate your alumni network.",
};

const defaultSiteData: SiteData = {
  brandName: "Networkr",
  logo: "/logo.png",
  institutionName: "your institution",
  navLinks: [
    { label: "Problem", hash: "problem" },
    { label: "Solution", hash: "solution" },
    { label: "Value", hash: "value" },
    { label: "Implementation", hash: "implementation" },
    { label: "About", hash: "about" },
  ],
  navCta: { label: "Get Started", hash: "get-started" },
  hero: defaultHero,
  coreProblem: defaultCoreProblem,
  solution: defaultSolution,
  strategicValue: defaultStrategicValue,
  implementation: defaultImplementation,
  mattersNow: defaultMattersNow,
  partnerOpportunity: defaultPartnerOpportunity,
  aboutNetworkr: defaultAboutNetworkr,
  nextStep: defaultNextStep,
  footer: defaultFooter,
  seo: defaultSeo,
};

/** Per-tenant overrides for white-label (domain → tenant id). */
const tenantDataOverrides: Partial<Record<string, SiteDataOverride>> = {
  "uet-peshawar": {
    institutionName: "UET Peshawar",
    solution: {
      universityLogo: "/uet-peshawar.png",
      universityName: "UET Peshawar",
    },
    partnerOpportunity: {
      universityName: "UET Peshawar",
    },
    seo: {
      title: "Networkr for UET Peshawar — Alumni Network Activation",
      description:
        "Activate the UET Peshawar alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle: "Networkr for UET Peshawar — Alumni Network Activation",
      ogDescription:
        "Activate the UET Peshawar alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/uet-peshawar.png",
    },
  },
  numl: {
    institutionName: "NUML",
    solution: {
      universityLogo: "/numl.png",
      universityName: "NUML",
    },
    partnerOpportunity: {
      universityName: "NUML",
    },
    seo: {
      title: "Networkr for NUML — Alumni Network Activation",
      description:
        "Activate the NUML alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle: "Networkr for NUML — Alumni Network Activation",
      ogDescription:
        "Activate the NUML alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/numl.png",
    },
  },
  "air-university": {
    institutionName: "Air University",
    solution: {
      universityLogo: "/air-university.png",
      universityName: "Air University",
    },
    partnerOpportunity: {
      universityName: "Air University",
    },
    seo: {
      title: "Networkr for Air University — Alumni Network Activation",
      description:
        "Activate the Air University alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle: "Networkr for Air University — Alumni Network Activation",
      ogImage: "/air-university.png",
    },
  },
  cecos: {
    institutionName: "CECOS University",
    solution: {
      universityLogo: "/cecos.png",
      universityName: "CECOS University",
    },
    partnerOpportunity: {
      universityName: "CECOS University",
    },
    seo: {
      title: "Networkr for CECOS University — Alumni Network Activation",
      description:
        "Activate the CECOS University alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle: "Networkr for CECOS University — Alumni Network Activation",
      ogImage: "/cecos.png",
    },
  },
  "im-sciences": {
    institutionName: "IM Sciences",
    solution: {
      universityLogo: "/im-sciences.png",
      universityName: "IM Sciences",
    },
    partnerOpportunity: {
      universityName: "IM Sciences",
    },
    seo: {
      title: "Networkr for IM Sciences — Alumni Network Activation",
      description:
        "Activate the IM Sciences alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle: "Networkr for IM Sciences — Alumni Network Activation",
      ogImage: "/im-sciences.png",
    },
  },
  "sarhad-university": {
    institutionName: "Sarhad University",
    solution: {
      universityLogo: "/sarhad-university.png",
      universityName: "Sarhad University",
    },
    partnerOpportunity: {
      universityName: "Sarhad University",
    },
    seo: {
      title: "Networkr for Sarhad University — Alumni Network Activation",
      description:
        "Activate the Sarhad University alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle: "Networkr for Sarhad University — Alumni Network Activation",
      ogImage: "/sarhad-university.png",
    },
  },
  "wah-university": {
    institutionName: "University of Wah",
    solution: {
      universityLogo: "/university_of_Wah.png",
      universityName: "University of Wah",
    },
    partnerOpportunity: {
      universityName: "University of Wah",
    },
    seo: {
      title: "Networkr for University of Wah — Alumni Network Activation",
      description:
        "Activate the University of Wah alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle: "Networkr for University of Wah — Alumni Network Activation",
      ogImage: "/university_of_Wah.png",
    },
  },
};

/**
 * Get site data for a tenant. Falls back to default when no override.
 */
export function getSiteData(tenantId: string): SiteData {
  const overrides = tenantDataOverrides[tenantId];
  if (!overrides) return defaultSiteData;
  return {
    ...defaultSiteData,
    ...overrides,
    hero: { ...defaultSiteData.hero, ...overrides.hero },
    coreProblem: { ...defaultSiteData.coreProblem, ...overrides.coreProblem },
    solution: { ...defaultSiteData.solution, ...overrides.solution },
    strategicValue: {
      ...defaultSiteData.strategicValue,
      ...overrides.strategicValue,
    },
    implementation: {
      ...defaultSiteData.implementation,
      ...overrides.implementation,
    },
    mattersNow: { ...defaultSiteData.mattersNow, ...overrides.mattersNow },
    partnerOpportunity: {
      ...defaultSiteData.partnerOpportunity,
      ...overrides.partnerOpportunity,
    },
    aboutNetworkr: {
      ...defaultSiteData.aboutNetworkr,
      ...overrides.aboutNetworkr,
    },
    nextStep: { ...defaultSiteData.nextStep, ...overrides.nextStep },
    footer: { ...defaultSiteData.footer, ...overrides.footer },
    seo: { ...defaultSiteData.seo, ...overrides.seo },
    navLinks: overrides.navLinks ?? defaultSiteData.navLinks,
  };
}
