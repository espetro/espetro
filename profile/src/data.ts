// Single source of truth for the profile README: copy, links, geometry.
// `pnpm readme` renders README.md from this; `pnpm render` shoots the PNGs.

export const SITE = "https://illo.fyi";
export const EMAIL = "hey@illo.fyi";

export const hero = {
  name: "Quino Terrasa",
  status: "Open to founding engineer roles & select projects",
  line1: "I build AI products people love,",
  line2: "and the plumbing under them.",
  intro:
    "I'm Quino (pronounced /ˈkino/), a product engineer who joins founding teams early and ships the whole thing: AI-first products, taste-level frontends and the unglamorous plumbing underneath. High-agency, end to end, from blank repo to production. The AI is the feature, the craft is the moat.",
};

export const buttons = [
  { key: "start", label: "Start a project", href: `mailto:${EMAIL}`, primary: true, w: 356 },
  { key: "site", label: "illo.fyi", href: SITE, primary: false, w: 300 },
];

export const headers = {
  work: { bold: "Selected work.", rest: "Products and open source I build and ship." },
  impact: { bold: "Impact.", rest: "Before and after, across the roles I've held." },
  stack: { bold: "Tools.", rest: "What I build with." },
  contact: { bold: "Say hi.", rest: "Tell me what you're building." },
};

export type CardSize = "tall" | "mid" | "wide" | "third";

// Color-coded categories shown as chips on each card.
export type CatKey = "oss" | "desktop" | "web" | "cloud" | "revenue";
export const CATS: Record<CatKey, { label: string; color: string }> = {
  oss: { label: "open source", color: "#3da639" },
  desktop: { label: "desktop", color: "#2f6fed" },
  web: { label: "web", color: "#3aa6e8" },
  cloud: { label: "cloud", color: "#7d8ef2" },
  revenue: { label: "revenue", color: "plain" }, // neutral chip color
};

export interface WorkCard {
  key: string;
  title: string;
  sub: string;
  href: string;
  logo: string;
  shot: string;
  shotPos?: string;
  cats: CatKey[];
  tag?: string; // extra neutral chip (e.g. role: core team, solo-built)
  size: CardSize;
  widthPct: number; // rendered width in README
  float?: boolean; // tall left-column card
  arrow?: boolean;
  logoTile?: boolean;
  alt: string;
}

export const SIZES: Record<CardSize, [number, number]> = {
  tall: [1016, 1164],
  mid: [740, 520],
  wide: [1160, 480],
  third: [576, 480],
};

// Bento order: tall floats left, right column stacks, then alternating rows.
// Widths sum to 100% per row; each PNG bakes a fixed transparent gutter.
export const work: WorkCard[] = [
  { key: "brioso", title: "Brioso", sub: "AI audio canvas: prompt, generate, iterate.", href: "https://usebrioso.com", logo: "brioso.png", shot: "brioso_c.png", cats: ["revenue", "web", "cloud"], tag: "solo-built", size: "tall", widthPct: 56, float: true, arrow: true, alt: "Brioso: AI audio canvas, prompt, generate, iterate. Solo-built." },
  { key: "lilo", title: "Lilo", sub: "WebKit browser for Mac", href: "https://getlilo.app", logo: "lilo.png", shot: "lilo_app.png", cats: ["oss", "desktop"], tag: "core team", size: "mid", widthPct: 44, alt: "Lilo: a WebKit browser for Mac. Core team." },
  { key: "calca", title: "Calca", sub: "Plain English to HTML/CSS", href: "https://calca.illo.fyi", logo: "calca.png", shot: "calca.png", cats: ["oss", "desktop", "web"], size: "mid", widthPct: 44, alt: "Calca: plain-English design to HTML/CSS. Open source." },
  { key: "stash", title: "Stash", sub: "Tabs into one link", href: "https://stash.illo.fyi", logo: "stash.png", shot: "stash.png", cats: ["oss", "web"], size: "third", widthPct: 33, alt: "Stash: browser tabs into one shareable link. Open source." },
  { key: "cauce", title: "cauce", sub: "Local web-search proxy for AI agents", href: "https://cauce.fyi", logo: "cauce.png", shot: "cauce.png", shotPos: "center 30%", cats: ["oss", "web", "cloud"], size: "wide", widthPct: 67, alt: "cauce: local web-search proxy for AI agents. Self-host." },
  { key: "pyscriptc", title: "pyscriptc", sub: "Annotated Python to native binaries", href: "https://pyscriptc.pages.dev", logo: "pyscriptc.png", shot: "pyscriptc.png", cats: ["oss", "desktop"], size: "wide", widthPct: 67, alt: "pyscriptc: annotated Python to native binaries, about 1.1k downloads per month." },
  { key: "intl-ai", title: "intl-ai", sub: "AI i18n at build time", href: "https://intl-ai.illo.fyi", logo: "intl-ai.png", shot: "intl-ai.png", shotPos: "30% top", cats: ["oss", "desktop"], size: "third", widthPct: 33, logoTile: true, alt: "intl-ai: AI i18n translation at build time. Open source." },
];

export const metrics = [
  { big: "2×", label: "CI/CD speed", role: "Tech lead · full-stack", before: 50, after: 100, bl: "1×", al: "2×" },
  { big: "−66%", label: "Maintenance burden", role: "Full-stack AI engineer", before: 100, after: 34, bl: "100%", al: "34%" },
  { big: "−40%", label: "Build time", role: "Data platform engineer", before: 100, after: 60, bl: "10 min", al: "6 min" },
];

export const stack: { icon: string | null; label: string }[] = [
  { icon: "typescript", label: "TypeScript" }, { icon: "python", label: "Python" },
  { icon: "rust", label: "Rust" }, { icon: "swift", label: "Swift" },
  { icon: "react", label: "React" }, { icon: "nextdotjs", label: "Next.js" },
  { icon: "nodedotjs", label: "Node.js" }, { icon: "astro", label: "Astro" },
  { icon: "tailwindcss", label: "Tailwind CSS" }, { icon: "postgresql", label: "PostgreSQL" },
  { icon: "kubernetes", label: "Kubernetes" }, { icon: null, label: "AWS" },
  { icon: null, label: "Azure" }, { icon: "docker", label: "Docker" },
  { icon: "anthropic", label: "Claude" }, { icon: "modelcontextprotocol", label: "MCP" },
  { icon: null, label: "LLM agents" }, { icon: null, label: "RAG" },
  { icon: null, label: "LLVM" },
];

export const socials: { key: string; label: string; href: string; icon: string | null; w: number }[] = [
  { key: "github", label: "GitHub", href: "https://github.com/espetro", icon: "github", w: 208 },
  { key: "linkedin", label: "LinkedIn", href: "https://linkedin.com/in/quinoterrasa", icon: "linkedin", w: 232 },
  { key: "x", label: "X", href: "https://x.com/josocjoq", icon: "x", w: 136 },
  { key: "mail", label: "Email", href: `mailto:${EMAIL}`, icon: "mail", w: 232 },
  { key: "site", label: "illo.fyi", href: SITE, icon: "globe", w: 214 },
];

export const moreOn = {
  text: "More on",
  links: [
    { label: "illo.fyi", href: SITE },
    { label: "agentplugins", href: "https://github.com/sigilco/agentplugins" },
  ],
};

export const ICON_PATHS = {
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  oss: '<line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
};

export const ARROW = '<path d="M7 17 17 7M8 7h9v9"/>';
