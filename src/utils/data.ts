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
}

/** Contact form modal — used for get-started / demo CTAs across marketing pages */
export interface ContactFormData {
  title: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  subjectLabel: string;
  subjectPlaceholder: string;
  submitLabel: string;
  closeLabel: string;
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
  /** Contact form modal copy — reusable across CTAs */
  contactForm: ContactFormData;
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
    | "contactForm"
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
};

const defaultContactForm: ContactFormData = {
  title: "Get in touch",
  nameLabel: "Name",
  namePlaceholder: "Your name",
  emailLabel: "Email",
  emailPlaceholder: "you@example.com",
  phoneLabel: "Phone number",
  phonePlaceholder: "+1 (555) 000-0000",
  subjectLabel: "Subject",
  subjectPlaceholder: "How can we help?",
  submitLabel: "Send message",
  closeLabel: "Close",
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
  contactForm: defaultContactForm,
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
  "kmu-university": {
    institutionName: "Khyber Medical University",
    solution: {
      universityLogo: "/kmu-logo-3d.png",
      universityName: "Khyber Medical University",
    },
    partnerOpportunity: {
      universityName: "Khyber Medical University",
    },
    seo: {
      title: "Networkr for Khyber Medical University — Alumni Network Activation",
      description:
        "Activate the Khyber Medical University alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle: "Networkr for Khyber Medical University — Alumni Network Activation",
      ogImage: "/kmu-logo-3d.png",
    },
  },
  "pu-lahore": {
    institutionName: "University of the Punjab",
    solution: {
      universityLogo: "/ucp-lahore.png",
      universityName: "University of the Punjab",
    },
    partnerOpportunity: {
      universityName: "University of the Punjab",
    },
    seo: {
      title: "Networkr for University of the Punjab — Alumni Network Activation",
      description:
        "Activate the University of the Punjab alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle: "Networkr for University of the Punjab — Alumni Network Activation",
      ogDescription:
        "Activate the University of the Punjab alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/ucp-lahore.png",
    },
  },
  "uet-lahore": {
    institutionName: "UET Lahore University of Engineering and Technology",
    solution: {
      universityLogo: "/uet-lahore.svg",
      universityName: "UET Lahore University of Engineering and Technology",
    },
    partnerOpportunity: {
      universityName: "UET Lahore University of Engineering and Technology",
    },
    seo: {
      title: "Networkr for UET Lahore — Alumni Network Activation",
      description:
        "Activate the UET Lahore alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle: "Networkr for UET Lahore — Alumni Network Activation",
      ogDescription:
        "Activate the UET Lahore alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/uet-lahore.svg",
    },
  },
  "lums-lahore": {
    institutionName: "LUMS (Lahore University of Management Sciences)",
    solution: {
      universityLogo: "/lums-lahore.svg",
      universityName: "LUMS (Lahore University of Management Sciences)",
    },
    partnerOpportunity: {
      universityName: "LUMS (Lahore University of Management Sciences)",
    },
    seo: {
      title: "Networkr for LUMS — Alumni Network Activation",
      description:
        "Activate the LUMS alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle: "Networkr for LUMS — Alumni Network Activation",
      ogDescription:
        "Activate the LUMS alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/lums-lahore.svg",
    },
  },
  "fccu-lahore": {
    institutionName: "Forman Christian College (FCCU)",
    solution: {
      universityLogo: "/fccu.png",
      universityName: "Forman Christian College (FCCU)",
    },
    partnerOpportunity: {
      universityName: "Forman Christian College (FCCU)",
    },
    seo: {
      title: "Networkr for Forman Christian College (FCCU) — Alumni Network Activation",
      description:
        "Activate the Forman Christian College (FCCU) alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle:
        "Networkr for Forman Christian College (FCCU) — Alumni Network Activation",
      ogDescription:
        "Activate the FCCU alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/fccu.png",
    },
  },
  "kinnaird-college-lahore": {
    institutionName: "Kinnaird College for Women",
    solution: {
      universityLogo: "/kinnaird-college.png",
      universityName: "Kinnaird College for Women",
    },
    partnerOpportunity: {
      universityName: "Kinnaird College for Women",
    },
    seo: {
      title: "Networkr for Kinnaird College for Women — Alumni Network Activation",
      description:
        "Activate the Kinnaird College for Women alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle: "Networkr for Kinnaird College for Women — Alumni Network Activation",
      ogDescription:
        "Activate the Kinnaird College for Women alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/kinnaird-college.png",
    },
  },
  "uol-lahore": {
    institutionName: "University of Lahore (UOL)",
    solution: {
      universityLogo: "/uol.png",
      universityName: "University of Lahore (UOL)",
    },
    partnerOpportunity: {
      universityName: "University of Lahore (UOL)",
    },
    seo: {
      title: "Networkr for University of Lahore (UOL) — Alumni Network Activation",
      description:
        "Activate the University of Lahore (UOL) alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle:
        "Networkr for University of Lahore (UOL) — Alumni Network Activation",
      ogDescription:
        "Activate the University of Lahore (UOL) alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/uol.png",
    },
  },
  "ucp-lahore": {
    institutionName: "UCP (Central Punjab)",
    solution: {
      universityLogo: "/ucp-central-punjab.png",
      universityName: "UCP (Central Punjab)",
    },
    partnerOpportunity: {
      universityName: "UCP (Central Punjab)",
    },
    seo: {
      title: "Networkr for UCP (Central Punjab) — Alumni Network Activation",
      description:
        "Activate the UCP (Central Punjab) alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle: "Networkr for UCP (Central Punjab) — Alumni Network Activation",
      ogDescription:
        "Activate the UCP (Central Punjab) alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/ucp-central-punjab.png",
    },
  },
  "fast-nuces-lahore": {
    institutionName: "FAST-NUCES",
    solution: {
      universityLogo: "/fast-nuces.png",
      universityName: "FAST-NUCES",
    },
    partnerOpportunity: {
      universityName: "FAST-NUCES",
    },
    seo: {
      title: "Networkr for FAST-NUCES — Alumni Network Activation",
      description:
        "Activate the FAST-NUCES alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle: "Networkr for FAST-NUCES — Alumni Network Activation",
      ogDescription:
        "Activate the FAST-NUCES alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/fast-nuces.png",
    },
  },
  "aimc-lahore": {
    institutionName: "Allama Iqbal Medical College (AIMC)",
    solution: {
      universityLogo: "/aimc.png",
      universityName: "Allama Iqbal Medical College (AIMC)",
    },
    partnerOpportunity: {
      universityName: "Allama Iqbal Medical College (AIMC)",
    },
    seo: {
      title: "Networkr for Allama Iqbal Medical College (AIMC) — Alumni Network Activation",
      description:
        "Activate the Allama Iqbal Medical College (AIMC) alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle:
        "Networkr for Allama Iqbal Medical College (AIMC) — Alumni Network Activation",
      ogDescription:
        "Activate the AIMC alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/aimc.png",
    },
  },
  "kemu-lahore": {
    institutionName: "King Edward Medical Univ (KEMU)",
    solution: {
      universityLogo: "/kmu-lhr.png",
      universityName: "King Edward Medical Univ (KEMU)",
    },
    partnerOpportunity: {
      universityName: "King Edward Medical Univ (KEMU)",
    },
    seo: {
      title: "Networkr for King Edward Medical Univ (KEMU) — Alumni Network Activation",
      description:
        "Activate the King Edward Medical Univ (KEMU) alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle:
        "Networkr for King Edward Medical Univ (KEMU) — Alumni Network Activation",
      ogDescription:
        "Activate the KEMU alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/kmu-lhr.png",
    },
  },
  "cmh-lahore": {
    institutionName: "CMH Lahore Medical College",
    solution: {
      universityLogo: "/cmh-lhr.png",
      universityName: "CMH Lahore Medical College",
    },
    partnerOpportunity: {
      universityName: "CMH Lahore Medical College",
    },
    seo: {
      title: "Networkr for CMH Lahore Medical College — Alumni Network Activation",
      description:
        "Activate the CMH Lahore Medical College alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle: "Networkr for CMH Lahore Medical College — Alumni Network Activation",
      ogDescription:
        "Activate the CMH Lahore Medical College alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/cmh-lhr.png",
    },
  },
  "fjmu-lahore": {
    institutionName: "Fatima Jinnah Medical Univ (FJMU)",
    solution: {
      universityLogo: "/fjmu.png",
      universityName: "Fatima Jinnah Medical Univ (FJMU)",
    },
    partnerOpportunity: {
      universityName: "Fatima Jinnah Medical Univ (FJMU)",
    },
    seo: {
      title: "Networkr for Fatima Jinnah Medical Univ (FJMU) — Alumni Network Activation",
      description:
        "Activate the Fatima Jinnah Medical Univ (FJMU) alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle:
        "Networkr for Fatima Jinnah Medical Univ (FJMU) — Alumni Network Activation",
      ogDescription:
        "Activate the FJMU alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/fjmu.png",
    },
  },
  "lmdc-lahore": {
    institutionName: "LMDC (Lahore Medical & Dental)",
    solution: {
      universityLogo: "/lmdc.png",
      universityName: "LMDC (Lahore Medical & Dental)",
    },
    partnerOpportunity: {
      universityName: "LMDC (Lahore Medical & Dental)",
    },
    seo: {
      title: "Networkr for LMDC (Lahore Medical & Dental) — Alumni Network Activation",
      description:
        "Activate the LMDC alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle: "Networkr for LMDC (Lahore Medical & Dental) — Alumni Network Activation",
      ogDescription:
        "Activate the LMDC alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/lmdc.png",
    },
  },
  "fmh-lahore": {
    institutionName: "FMH College of Medicine",
    solution: {
      universityLogo: "/fmh-college-of-medicine.png",
      universityName: "FMH College of Medicine",
    },
    partnerOpportunity: {
      universityName: "FMH College of Medicine",
    },
    seo: {
      title: "Networkr for FMH College of Medicine — Alumni Network Activation",
      description:
        "Activate the FMH College of Medicine alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle: "Networkr for FMH College of Medicine — Alumni Network Activation",
      ogDescription:
        "Activate the FMH alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/fmh-college-of-medicine.png",
    },
  },
  "itu-lahore": {
    institutionName: "ITU (Information Technology University)",
    solution: {
      universityLogo: "/itu.png",
      universityName: "ITU (Information Technology University)",
    },
    partnerOpportunity: {
      universityName: "ITU (Information Technology University)",
    },
    seo: {
      title: "Networkr for ITU — Alumni Network Activation",
      description:
        "Activate the ITU alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle: "Networkr for ITU — Alumni Network Activation",
      ogDescription:
        "Activate the ITU alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/itu.png",
    },
  },
  "lgs-lahore": {
    institutionName: "Lahore Grammar University (LGS)",
    solution: {
      universityLogo: "/logo.png",
      universityName: "Lahore Grammar University (LGS)",
    },
    partnerOpportunity: {
      universityName: "Lahore Grammar University (LGS)",
    },
    seo: {
      title: "Networkr for Lahore Grammar University (LGS) — Alumni Network Activation",
      description:
        "Activate the Lahore Grammar University (LGS) alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle:
        "Networkr for Lahore Grammar University (LGS) — Alumni Network Activation",
      ogDescription:
        "Activate the Lahore Grammar University (LGS) alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/logo.png",
    },
  },
  "riu-lahore": {
    institutionName: "Roots International University (RIU)",
    solution: {
      universityLogo: "/roots-internaltional.png",
      universityName: "Roots International University (RIU)",
    },
    partnerOpportunity: {
      universityName: "Roots International University (RIU)",
    },
    seo: {
      title: "Networkr for Roots International University (RIU) — Alumni Network Activation",
      description:
        "Activate the Roots International University (RIU) alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle:
        "Networkr for Roots International University (RIU) — Alumni Network Activation",
      ogDescription:
        "Activate the RIU alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/roots-internaltional.png",
    },
  },
  "riphah-lahore": {
    institutionName: "Riphah International (Lahore)",
    solution: {
      universityLogo: "/riphah-logo-wide.svg",
      universityName: "Riphah International (Lahore)",
    },
    partnerOpportunity: {
      universityName: "Riphah International (Lahore)",
    },
    seo: {
      title: "Networkr for Riphah International (Lahore) — Alumni Network Activation",
      description:
        "Activate the Riphah International (Lahore) alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle:
        "Networkr for Riphah International (Lahore) — Alumni Network Activation",
      ogDescription:
        "Activate the Riphah International (Lahore) alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/riphah-logo-wide.svg",
    },
  },
  "numl-lahore": {
    institutionName: "NUML Lahore",
    solution: {
      universityLogo: "/numl.png",
      universityName: "NUML Lahore",
    },
    partnerOpportunity: {
      universityName: "NUML Lahore",
    },
    seo: {
      title: "Networkr for NUML Lahore — Alumni Network Activation",
      description:
        "Activate the NUML Lahore alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle: "Networkr for NUML Lahore — Alumni Network Activation",
      ogDescription:
        "Activate the NUML Lahore alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/numl.png",
    },
  },
  "umt-lahore": {
    institutionName: "UMT (University of Management and Technology)",
    solution: {
      universityLogo: "/umt.png",
      universityName: "UMT (University of Management and Technology)",
    },
    partnerOpportunity: {
      universityName: "UMT (University of Management and Technology)",
    },
    seo: {
      title: "Networkr for UMT — Alumni Network Activation",
      description:
        "Activate the UMT alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle: "Networkr for UMT — Alumni Network Activation",
      ogDescription:
        "Activate the UMT alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/umt.png",
    },
  },
  "superior-lahore": {
    institutionName: "Superior University",
    solution: {
      universityLogo: "/superior-university.png",
      universityName: "Superior University",
    },
    partnerOpportunity: {
      universityName: "Superior University",
    },
    seo: {
      title: "Networkr for Superior University — Alumni Network Activation",
      description:
        "Activate the Superior University alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle: "Networkr for Superior University — Alumni Network Activation",
      ogDescription:
        "Activate the Superior University alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/superior-university.png",
    },
  },
  "comsats-lahore": {
    institutionName: "COMSATS (Lahore)",
    solution: {
      universityLogo: "/comsats.jpg",
      universityName: "COMSATS (Lahore)",
    },
    partnerOpportunity: {
      universityName: "COMSATS (Lahore)",
    },
    seo: {
      title: "Networkr for COMSATS (Lahore) — Alumni Network Activation",
      description:
        "Activate the COMSATS (Lahore) alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle: "Networkr for COMSATS (Lahore) — Alumni Network Activation",
      ogDescription:
        "Activate the COMSATS (Lahore) alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/comsats.jpg",
    },
  },
  "bnu-lahore": {
    institutionName: "BNU (Beaconhouse Nat. Univ)",
    solution: {
      universityLogo: "/bcnhu.png",
      universityName: "BNU (Beaconhouse Nat. Univ)",
    },
    partnerOpportunity: {
      universityName: "BNU (Beaconhouse Nat. Univ)",
    },
    seo: {
      title: "Networkr for BNU (Beaconhouse Nat. Univ) — Alumni Network Activation",
      description:
        "Activate the BNU alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle: "Networkr for BNU (Beaconhouse Nat. Univ) — Alumni Network Activation",
      ogDescription:
        "Activate the BNU alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/bcnhu.png",
    },
  },
  "nca-lahore": {
    institutionName: "NCA (National College of Arts)",
    solution: {
      universityLogo: "/nca.png",
      universityName: "NCA (National College of Arts)",
    },
    partnerOpportunity: {
      universityName: "NCA (National College of Arts)",
    },
    seo: {
      title: "Networkr for NCA (National College of Arts) — Alumni Network Activation",
      description:
        "Activate the NCA alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle:
        "Networkr for NCA (National College of Arts) — Alumni Network Activation",
      ogDescription:
        "Activate the NCA alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/nca.png",
    },
  },
  "umc-lahore": {
    institutionName: "University Medical Center (UMC)",
    solution: {
      universityLogo: "/umc.png",
      universityName: "University Medical Center (UMC)",
    },
    partnerOpportunity: {
      universityName: "University Medical Center (UMC)",
    },
    seo: {
      title: "Networkr for University Medical Center (UMC) — Alumni Network Activation",
      description:
        "Activate the University Medical Center (UMC) alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle:
        "Networkr for University Medical Center (UMC) — Alumni Network Activation",
      ogDescription:
        "Activate the UMC alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/umc.png",
    },
  },
  "qau-isl": {
    institutionName: "Quaid-i-Azam University (QAU)",
    solution: {
      universityLogo: "/qau-isl.png",
      universityName: "Quaid-i-Azam University (QAU)",
    },
    partnerOpportunity: {
      universityName: "Quaid-i-Azam University (QAU)",
    },
    seo: {
      title: "Networkr for Quaid-i-Azam University (QAU) — Alumni Network Activation",
      description:
        "Activate the Quaid-i-Azam University (QAU) alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle:
        "Networkr for Quaid-i-Azam University (QAU) — Alumni Network Activation",
      ogDescription:
        "Activate the QAU alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/qau-isl.png",
    },
  },
  "nust-isl": {
    institutionName: "National University of Sciences & Tech (NUST)",
    solution: {
      universityLogo: "/nust-isl.png",
      universityName: "National University of Sciences & Tech (NUST)",
    },
    partnerOpportunity: {
      universityName: "National University of Sciences & Tech (NUST)",
    },
    seo: {
      title: "Networkr for NUST — Alumni Network Activation",
      description:
        "Activate the NUST alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle: "Networkr for NUST — Alumni Network Activation",
      ogDescription:
        "Activate the NUST alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/nust-isl.png",
    },
  },
  "aiou-isl": {
    institutionName: "Allama Iqbal Open University (AIOU)",
    solution: {
      universityLogo: "/aiou-isl.png",
      universityName: "Allama Iqbal Open University (AIOU)",
    },
    partnerOpportunity: {
      universityName: "Allama Iqbal Open University (AIOU)",
    },
    seo: {
      title: "Networkr for AIOU — Alumni Network Activation",
      description:
        "Activate the Allama Iqbal Open University (AIOU) alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle: "Networkr for AIOU — Alumni Network Activation",
      ogDescription:
        "Activate the AIOU alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/aiou-isl.png",
    },
  },
  "iiui-isl": {
    institutionName: "International Islamic University (IIUI)",
    solution: {
      universityLogo: "/iiui-isl.png",
      universityName: "International Islamic University (IIUI)",
    },
    partnerOpportunity: {
      universityName: "International Islamic University (IIUI)",
    },
    seo: {
      title: "Networkr for IIUI — Alumni Network Activation",
      description:
        "Activate the IIUI alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle: "Networkr for IIUI — Alumni Network Activation",
      ogDescription:
        "Activate the IIUI alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/iiui-isl.png",
    },
  },
  "comsats-isl": {
    institutionName: "COMSATS University Islamabad (CUI)",
    solution: {
      universityLogo: "/comsats.jpg",
      universityName: "COMSATS University Islamabad (CUI)",
    },
    partnerOpportunity: {
      universityName: "COMSATS University Islamabad (CUI)",
    },
    seo: {
      title: "Networkr for COMSATS University Islamabad (CUI) — Alumni Network Activation",
      description:
        "Activate the COMSATS University Islamabad (CUI) alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle:
        "Networkr for COMSATS University Islamabad (CUI) — Alumni Network Activation",
      ogDescription:
        "Activate the CUI alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/comsats.jpg",
    },
  },
  "numl-isl": {
    institutionName: "National University of Modern Languages (NUML)",
    solution: {
      universityLogo: "/numl.png",
      universityName: "National University of Modern Languages (NUML)",
    },
    partnerOpportunity: {
      universityName: "National University of Modern Languages (NUML)",
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
  "uet-taxila-isl": {
    institutionName: "UET Taxila",
    solution: {
      universityLogo: "/uet-taxila-isl.png",
      universityName: "UET Taxila",
    },
    partnerOpportunity: {
      universityName: "UET Taxila",
    },
    seo: {
      title: "Networkr for UET Taxila — Alumni Network Activation",
      description:
        "Activate the UET Taxila alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle: "Networkr for UET Taxila — Alumni Network Activation",
      ogDescription:
        "Activate the UET Taxila alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/uet-taxila-isl.png",
    },
  },
  "bahria-university-isl": {
    institutionName: "Bahria University",
    solution: {
      universityLogo: "/bahria-university-isl.png",
      universityName: "Bahria University",
    },
    partnerOpportunity: {
      universityName: "Bahria University",
    },
    seo: {
      title: "Networkr for Bahria University — Alumni Network Activation",
      description:
        "Activate the Bahria University alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle: "Networkr for Bahria University — Alumni Network Activation",
      ogDescription:
        "Activate the Bahria University alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/bahria-university-isl.png",
    },
  },
  "air-university-isl": {
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
      ogDescription:
        "Activate the Air University alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/air-university.png",
    },
  },
  "rmu-isl": {
    institutionName: "Rawalpindi Medical University (RMU)",
    solution: {
      universityLogo: "/rmu-isl.png",
      universityName: "Rawalpindi Medical University (RMU)",
    },
    partnerOpportunity: {
      universityName: "Rawalpindi Medical University (RMU)",
    },
    seo: {
      title: "Networkr for RMU — Alumni Network Activation",
      description:
        "Activate the Rawalpindi Medical University (RMU) alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle: "Networkr for RMU — Alumni Network Activation",
      ogDescription:
        "Activate the RMU alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/rmu-isl.png",
    },
  },
  "nums-isl": {
    institutionName: "National University of Medical Sciences (NUMS)",
    solution: {
      universityLogo: "/nums-isl.png",
      universityName: "National University of Medical Sciences (NUMS)",
    },
    partnerOpportunity: {
      universityName: "National University of Medical Sciences (NUMS)",
    },
    seo: {
      title: "Networkr for NUMS — Alumni Network Activation",
      description:
        "Activate the NUMS alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle: "Networkr for NUMS — Alumni Network Activation",
      ogDescription:
        "Activate the NUMS alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/nums-isl.png",
    },
  },
  "pieas-isl": {
    institutionName:
      "Pakistan Institute of Engineering & Applied Sciences (PIEAS)",
    solution: {
      universityLogo: "/pieas-isl.png",
      universityName:
        "Pakistan Institute of Engineering & Applied Sciences (PIEAS)",
    },
    partnerOpportunity: {
      universityName:
        "Pakistan Institute of Engineering & Applied Sciences (PIEAS)",
    },
    seo: {
      title: "Networkr for PIEAS — Alumni Network Activation",
      description:
        "Activate the Pakistan Institute of Engineering & Applied Sciences (PIEAS) alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle: "Networkr for PIEAS — Alumni Network Activation",
      ogDescription:
        "Activate the PIEAS alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/pieas-isl.png",
    },
  },
  "ndu-isl": {
    institutionName: "National Defence University (NDU)",
    solution: {
      universityLogo: "/ndu-isl.png",
      universityName: "National Defence University (NDU)",
    },
    partnerOpportunity: {
      universityName: "National Defence University (NDU)",
    },
    seo: {
      title: "Networkr for NDU — Alumni Network Activation",
      description:
        "Activate the National Defence University (NDU) alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle: "Networkr for NDU — Alumni Network Activation",
      ogDescription:
        "Activate the NDU alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/ndu-isl.png",
    },
  },
  "ist-isl": {
    institutionName: "Institute of Space Technology (IST)",
    solution: {
      universityLogo: "/ist-isl.png",
      universityName: "Institute of Space Technology (IST)",
    },
    partnerOpportunity: {
      universityName: "Institute of Space Technology (IST)",
    },
    seo: {
      title: "Networkr for IST — Alumni Network Activation",
      description:
        "Activate the Institute of Space Technology (IST) alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle: "Networkr for IST — Alumni Network Activation",
      ogDescription:
        "Activate the IST alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/ist-isl.png",
    },
  },
  "szabmu-isl": {
    institutionName:
      "Shaheed Zulfiqar Ali Bhutto Medical University (SZABMU)",
    solution: {
      universityLogo: "/szabmu-isl.png",
      universityName:
        "Shaheed Zulfiqar Ali Bhutto Medical University (SZABMU)",
    },
    partnerOpportunity: {
      universityName:
        "Shaheed Zulfiqar Ali Bhutto Medical University (SZABMU)",
    },
    seo: {
      title:
        "Networkr for SZABMU — Alumni Network Activation",
      description:
        "Activate the Shaheed Zulfiqar Ali Bhutto Medical University (SZABMU) alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle: "Networkr for SZABMU — Alumni Network Activation",
      ogDescription:
        "Activate the SZABMU alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/szabmu-isl.png",
    },
  },
  "nutech-isl": {
    institutionName: "National University of Technology (NUTECH)",
    solution: {
      universityLogo: "/nutech-isl.png",
      universityName: "National University of Technology (NUTECH)",
    },
    partnerOpportunity: {
      universityName: "National University of Technology (NUTECH)",
    },
    seo: {
      title: "Networkr for NUTECH — Alumni Network Activation",
      description:
        "Activate the NUTECH alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle: "Networkr for NUTECH — Alumni Network Activation",
      ogDescription:
        "Activate the NUTECH alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/nutech-isl.png",
    },
  },
  "fui-isl": {
    institutionName: "Foundation University Islamabad (FUI)",
    solution: {
      universityLogo: "/fui-isl.png",
      universityName: "Foundation University Islamabad (FUI)",
    },
    partnerOpportunity: {
      universityName: "Foundation University Islamabad (FUI)",
    },
    seo: {
      title:
        "Networkr for Foundation University Islamabad (FUI) — Alumni Network Activation",
      description:
        "Activate the Foundation University Islamabad (FUI) alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle:
        "Networkr for Foundation University Islamabad (FUI) — Alumni Network Activation",
      ogDescription:
        "Activate the FUI alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/fui-isl.png",
    },
  },
  "federal-urdu-isl": {
    institutionName: "Federal Urdu University (Islamabad Campus)",
    solution: {
      universityLogo: "/fui-isl.png",
      universityName: "Federal Urdu University (Islamabad Campus)",
    },
    partnerOpportunity: {
      universityName: "Federal Urdu University (Islamabad Campus)",
    },
    seo: {
      title:
        "Networkr for Federal Urdu University (Islamabad Campus) — Alumni Network Activation",
      description:
        "Activate the Federal Urdu University (Islamabad Campus) alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle:
        "Networkr for Federal Urdu University (Islamabad Campus) — Alumni Network Activation",
      ogDescription:
        "Activate the Federal Urdu University alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/fui-isl.png",
    },
  },
  "pide-isl": {
    institutionName: "Pakistan Institute of Development Economics (PIDE)",
    solution: {
      universityLogo: "/logo.png",
      universityName: "Pakistan Institute of Development Economics (PIDE)",
    },
    partnerOpportunity: {
      universityName: "Pakistan Institute of Development Economics (PIDE)",
    },
    seo: {
      title: "Networkr for PIDE — Alumni Network Activation",
      description:
        "Activate the Pakistan Institute of Development Economics (PIDE) alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle: "Networkr for PIDE — Alumni Network Activation",
      ogDescription:
        "Activate the PIDE alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/logo.png",
    },
  },
  "giki-isl": {
    institutionName: "Ghulam Ishaq Khan Institute (GIKI)",
    solution: {
      universityLogo: "/giki-isl.png",
      universityName: "Ghulam Ishaq Khan Institute (GIKI)",
    },
    partnerOpportunity: {
      universityName: "Ghulam Ishaq Khan Institute (GIKI)",
    },
    seo: {
      title: "Networkr for GIKI — Alumni Network Activation",
      description:
        "Activate the Ghulam Ishaq Khan Institute (GIKI) alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle: "Networkr for GIKI — Alumni Network Activation",
      ogDescription:
        "Activate the GIKI alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/giki-isl.png",
    },
  },
  "fast-nuces-isl": {
    institutionName: "FAST-NUCES (Islamabad Campus)",
    solution: {
      universityLogo: "/fast-nuces.png",
      universityName: "FAST-NUCES (Islamabad Campus)",
    },
    partnerOpportunity: {
      universityName: "FAST-NUCES (Islamabad Campus)",
    },
    seo: {
      title: "Networkr for FAST-NUCES — Alumni Network Activation",
      description:
        "Activate the FAST-NUCES (Islamabad Campus) alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle: "Networkr for FAST-NUCES — Alumni Network Activation",
      ogDescription:
        "Activate the FAST-NUCES alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/fast-nuces.png",
    },
  },
  "riphah-isl": {
    institutionName: "Riphah International University",
    solution: {
      universityLogo: "/riphah-logo-wide.svg",
      universityName: "Riphah International University",
    },
    partnerOpportunity: {
      universityName: "Riphah International University",
    },
    seo: {
      title: "Networkr for Riphah International University — Alumni Network Activation",
      description:
        "Activate the Riphah International University alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle:
        "Networkr for Riphah International University — Alumni Network Activation",
      ogDescription:
        "Activate the Riphah alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/riphah-logo-wide.svg",
    },
  },
  "cust-isl": {
    institutionName: "Capital University of Science & Technology (CUST)",
    solution: {
      universityLogo: "/cust-isl.png",
      universityName: "Capital University of Science & Technology (CUST)",
    },
    partnerOpportunity: {
      universityName: "Capital University of Science & Technology (CUST)",
    },
    seo: {
      title: "Networkr for CUST — Alumni Network Activation",
      description:
        "Activate the Capital University of Science & Technology (CUST) alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle: "Networkr for CUST — Alumni Network Activation",
      ogDescription:
        "Activate the CUST alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/cust-isl.png",
    },
  },
  "stmu-isl": {
    institutionName: "Shifa Tameer-e-Millat University",
    solution: {
      universityLogo: "/stmu-isl.png",
      universityName: "Shifa Tameer-e-Millat University",
    },
    partnerOpportunity: {
      universityName: "Shifa Tameer-e-Millat University",
    },
    seo: {
      title: "Networkr for STMU — Alumni Network Activation",
      description:
        "Activate the Shifa Tameer-e-Millat University alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle: "Networkr for STMU — Alumni Network Activation",
      ogDescription:
        "Activate the STMU alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/stmu-isl.png",
    },
  },
  "hamdard-isl": {
    institutionName: "Hamdard University (Islamabad Campus)",
    solution: {
      universityLogo: "/hamdard-isl.png",
      universityName: "Hamdard University (Islamabad Campus)",
    },
    partnerOpportunity: {
      universityName: "Hamdard University (Islamabad Campus)",
    },
    seo: {
      title: "Networkr for Hamdard University — Alumni Network Activation",
      description:
        "Activate the Hamdard University (Islamabad Campus) alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle: "Networkr for Hamdard University — Alumni Network Activation",
      ogDescription:
        "Activate the Hamdard alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/hamdard-isl.png",
    },
  },
  "iqra-isl": {
    institutionName: "Iqra University (Islamabad Campus)",
    solution: {
      universityLogo: "/iqra-isl.png",
      universityName: "Iqra University (Islamabad Campus)",
    },
    partnerOpportunity: {
      universityName: "Iqra University (Islamabad Campus)",
    },
    seo: {
      title: "Networkr for Iqra University — Alumni Network Activation",
      description:
        "Activate the Iqra University (Islamabad Campus) alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle: "Networkr for Iqra University — Alumni Network Activation",
      ogDescription:
        "Activate the Iqra alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/iqra-isl.png",
    },
  },
  "szabist-isl": {
    institutionName: "SZABIST (Islamabad Campus)",
    solution: {
      universityLogo: "/szabist-isl.png",
      universityName: "SZABIST (Islamabad Campus)",
    },
    partnerOpportunity: {
      universityName: "SZABIST (Islamabad Campus)",
    },
    seo: {
      title: "Networkr for SZABIST — Alumni Network Activation",
      description:
        "Activate the SZABIST (Islamabad Campus) alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle: "Networkr for SZABIST — Alumni Network Activation",
      ogDescription:
        "Activate the SZABIST alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/szabist-isl.png",
    },
  },
  "myu-isl": {
    institutionName: "Muslim Youth University (MYU)",
    solution: {
      universityLogo: "/myu-isl.png",
      universityName: "Muslim Youth University (MYU)",
    },
    partnerOpportunity: {
      universityName: "Muslim Youth University (MYU)",
    },
    seo: {
      title: "Networkr for MYU — Alumni Network Activation",
      description:
        "Activate the Muslim Youth University (MYU) alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle: "Networkr for MYU — Alumni Network Activation",
      ogDescription:
        "Activate the MYU alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/myu-isl.png",
    },
  },
  "abasyn-isl": {
    institutionName: "Abasyn University (Islamabad Campus)",
    solution: {
      universityLogo: "/abasyn-isl.png",
      universityName: "Abasyn University (Islamabad Campus)",
    },
    partnerOpportunity: {
      universityName: "Abasyn University (Islamabad Campus)",
    },
    seo: {
      title: "Networkr for Abasyn University — Alumni Network Activation",
      description:
        "Activate the Abasyn University (Islamabad Campus) alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle: "Networkr for Abasyn University — Alumni Network Activation",
      ogDescription:
        "Activate the Abasyn alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/abasyn-isl.png",
    },
  },
  "preston-isl": {
    institutionName: "Preston University",
    solution: {
      universityLogo: "/preston-isl.png",
      universityName: "Preston University",
    },
    partnerOpportunity: {
      universityName: "Preston University",
    },
    seo: {
      title: "Networkr for Preston University — Alumni Network Activation",
      description:
        "Activate the Preston University alumni network. Networkr turns your alumni database into a structured private professional network for verified members.",
      ogTitle: "Networkr for Preston University — Alumni Network Activation",
      ogDescription:
        "Activate the Preston University alumni network. Private, verified professional networking for alumni and students.",
      ogImage: "/preston-isl.png",
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
    contactForm: { ...defaultSiteData.contactForm, ...overrides.contactForm },
    seo: { ...defaultSiteData.seo, ...overrides.seo },
    navLinks: overrides.navLinks ?? defaultSiteData.navLinks,
  };
}
