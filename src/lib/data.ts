export const profile = {
  name: "Achref Ben Abdallah",
  firstName: "Achref",
  role: "Software Engineer & Media Buyer",
  tagline: "I build the product — and run the paid campaigns that grow it.",
  location: "Tunis, Tunisia",
  availability: "Open to remote work & relocation · France · Germany · Qatar · Saudi Arabia",
  email: "achrefbenabdallah1@gmail.com",
  phone: "+216 25 198 540",
  photo: "/achref.jpg",
  resumes: [
    {
      label: "Software Engineer CV",
      description: "Full-stack · Angular · React · Node.js · Spring Boot",
      file: "/Achref-Ben-Abdallah-Software-Engineer-CV.pdf",
    },
    {
      label: "Media Buyer CV",
      description: "Meta Ads · Performance marketing",
      file: "/Achref-Ben-Abdallah-Media-Buyer-CV.pdf",
    },
  ],
  socials: {
    github: "https://github.com/achrefbenabdallah",
    linkedin: "https://www.linkedin.com/in/achref-ben-abdallah/",
  },
  bio: [
    "I'm a full-stack software engineer (engineering degree) with 3+ years building scalable web and mobile products across e-commerce, logistics, manufacturing and health & fitness — working with Angular, React, TypeScript, Node.js and Spring Boot, including a frontend role on a cloud IoT product for a German company.",
    "Today I'm Technical Project Lead at Dawema, leading a cross-functional team of 15 from architecture to deployment. I also run the platform's Meta Ads engine end-to-end — strategy, creative, landing pages and optimization — with $11K+ in spend at a blended 8.0× ROAS. I can build the product and drive the paid growth that scales it, without waiting on anyone.",
  ],
};

export type Stat = {
  value: string;
  label: string;
  sub?: string;
};

// Real figures pulled from the Dawema Meta ad account (May–Oct 2026).
export const mediaStats: Stat[] = [
  { value: "$88K", label: "Revenue generated", sub: "attributed purchase value" },
  { value: "8.0×", label: "Purchase ROAS", sub: "on $11K+ ad spend" },
  { value: "4,435", label: "Purchases driven", sub: "at ~$2.48 cost each" },
  { value: "1.5M", label: "People reached", sub: "6.6M impressions" },
];

export const mediaHighlights = [
  "Managed $11K+ in Meta Ads spend across 50+ campaigns and 30+ products, supporting an e-commerce platform from launch through profitable growth.",
  "Scaled winners profitably: a bag-pack CBO campaign reached 19.2× ROAS (734 purchases at $1.57) and a clothes-dryer ABO campaign hit 11.3× ROAS (575 purchases).",
  "Ran a structured testing process — ABO to test products, angles and creatives, CBO to scale winners — cutting underperformers fast and reallocating budget.",
  "Produced creative in-house — short-form video filmed and edited in CapCut, plus AI images and UGC-style videos — feeding a continuous creative-testing pipeline.",
  "Sustained a 3.5% CTR at a $0.05 CPC and a $1.67 CPM (138K link clicks); Messenger campaigns at $0.11 per conversation started.",
];

export type ProjectCover = "commerce" | "analytics" | "health" | "sports" | "travel";

export type Project = {
  name: string;
  context: string;
  period: string;
  description: string;
  highlights: string[];
  tech: string[];
  featured?: boolean;
  cover: ProjectCover;
  /** Optional real screenshot in /public; overrides the designed cover when set. */
  image?: string;
  /** Optional public link (repo or live site). */
  link?: { href: string; label: string };
};

export const projects: Project[] = [
  {
    name: "Zid",
    context: "Personal project · AI nutrition & fitness PWA",
    period: "2026",
    description:
      "A mobile-first, bilingual (English / Arabic with full RTL) Progressive Web App for tracking nutrition and strength training — snap a photo of your plate and AI estimates the macros. Installable and usable offline.",
    highlights: [
      "Integrated Google Gemini through a secured serverless function — Firebase ID tokens verified server-side (JWT/JWKS), so the API key never reaches the browser",
      "Firebase Auth + Cloud Firestore with per-user security rules; barcode scanning (ZXing) with Open Food Facts",
      "130-exercise illustrated workout library, PR detection, progress charts, reminders, CSV/JSON import-export and 40+ Vitest unit tests",
    ],
    tech: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Firebase", "Gemini API", "Netlify Functions", "PWA"],
    featured: true,
    cover: "health",
    link: { href: "https://github.com/achrefbenabdallah/Zid", label: "View code" },
  },
  {
    name: "Fashion Tool",
    context: "Personal project · Full-stack SaaS",
    period: "2026",
    description:
      "A full-stack inventory and sales platform for fashion vendors — track products and fabric costs, record sales, and monitor profit through a live analytics dashboard.",
    highlights: [
      "Built a secure multi-user API with JWT auth, bcrypt hashing and PostgreSQL, scoping every product and sale per user",
      "Automated profit tracking — each sale computes margin against fabric and product cost in real time",
      "Shipped a Chart.js analytics dashboard plus product image uploads handled with Multer",
    ],
    tech: ["Angular 17", "Node.js", "Express", "PostgreSQL", "JWT", "Chart.js"],
    featured: true,
    cover: "commerce",
    image: "/fashion-tool.jpg",
  },
  {
    name: "AMÉ Store",
    context: "Personal project · E-commerce for my own brand",
    period: "2025",
    description:
      "Single-page e-commerce storefront for AMÉ, my own fashion brand — product catalog, navigation and client-side purchase flow, backed by a decoupled order API.",
    highlights: [
      "Built the SPA in Angular 15 and TypeScript with RxJS",
      "Designed a separate Node.js REST API (orders-api) for order processing and tracking",
      "Optimized product images with Sharp; continuous deployment on Netlify and unit tests with Karma/Jasmine",
    ],
    tech: ["Angular 15", "TypeScript", "RxJS", "Node.js", "Sharp", "Netlify"],
    cover: "commerce",
  },
  {
    name: "CliniSeven",
    context: "Academic project · Healthcare",
    period: "Jun 2021 – Aug 2021",
    description:
      "Clinical management web application for handling patient and clinical data securely.",
    highlights: [
      "Reduced API response times by 30% with Spring Boot services",
      "Reached 90% test coverage using SonarQube & SonarLint",
      "Prototyped intuitive UIs in Figma, cutting UX feedback issues by 20%",
    ],
    tech: ["Java", "Spring Boot", "Angular", "Figma", "SonarQube"],
    cover: "health",
  },
];

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: ["Java", "JavaScript / TypeScript", "Python", "PHP", "C#", "HTML5", "CSS3"],
  },
  {
    title: "Frontend",
    skills: ["Angular (v15/16/17)", "React 19 / Next.js", "Tailwind CSS", "RxJS", "KnockoutJS", "Ionic", "PWA", "Chart.js / Recharts"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Spring Boot", "Symfony", "REST APIs", "JWT Auth", "Serverless Functions"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Azure", "Firebase", "Netlify", "Jenkins", "Azure Pipelines", "Git / GitHub"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "SQL Server", "Cloud Firestore"],
  },
  {
    title: "Quality & Testing",
    skills: ["Vitest", "Karma / Jasmine", "Playwright", "SonarQube", "Code Review"],
  },
  {
    title: "AI Integration",
    skills: ["Google Gemini API", "Structured JSON output", "Prompt engineering"],
  },
  {
    title: "Media Buying",
    skills: ["Meta Ads Manager", "ABO / CBO", "ROAS · CPA · CTR · CVR", "Pixel & Tracking", "Messenger campaigns"],
  },
  {
    title: "Creative",
    skills: ["CapCut", "AI Image / UGC", "Landing Pages", "Meta Business Suite"],
  },
];

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  points: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    role: "Software Engineer, Technical Project Lead & Media Buyer",
    company: "Dawema",
    location: "Tunisia",
    period: "Oct 2025 – Present",
    summary:
      "E-commerce platform empowering vendors with marketing & delivery solutions. I lead technical delivery and run the paid-growth engine.",
    points: [
      "Lead end-to-end technical delivery with a cross-functional team of 15, from architecture through deployment.",
      "Managed $11K+ in Meta Ads spend across 50+ campaigns: 4,435 purchases at ~$2.48 each and a blended 8.0× ROAS (~$88K attributed revenue).",
      "Aligned the roadmap with business priorities, contributing to a 22% increase in platform sales.",
    ],
    tags: ["Technical Lead", "Meta Ads", "Agile / Scrum", "Team of 15"],
  },
  {
    role: "Full-Stack Developer",
    company: "L-Mobile",
    location: "Tunisia",
    period: "Jun 2023 – Mar 2025",
    summary:
      "Digitizing logistics and production processes for industrial clients.",
    points: [
      "Built Angular (v16) & KnockoutJS components, improving app responsiveness by 25%.",
      "Optimized data mapping for 20% faster, more reliable information retrieval.",
      "Led code reviews (−15% production bugs) and documentation (−30% onboarding time).",
    ],
    tags: ["Angular", "Node.js", "C#", "SQL Server", "SonarQube"],
  },
  {
    role: "Frontend Developer",
    company: "Synexio",
    location: "Germany",
    period: "Sep 2022 – Feb 2023",
    summary:
      "Cloud solution for real-time visualization of factory production plans, built with an international team.",
    points: [
      "Cut data-consultation time by 30% with optimized real-time production views.",
      "Improved interface responsiveness by 25% through UI/UX refinement.",
      "Authored end-to-end Playwright test scenarios run in Azure Pipelines CI/CD.",
    ],
    tags: ["Angular", "TypeScript", "Playwright", "Azure", "Cumulocity IoT"],
  },
];

export const certifications = [
  { name: "Angular", issuer: "Sololearn", date: "Mar 2025" },
  { name: "JavaScript", issuer: "Alison", date: "Apr 2025" },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#media-buying", label: "Media Buying" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];
