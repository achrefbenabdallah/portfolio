export const profile = {
  name: "Achref Ben Abdallah",
  firstName: "Achref",
  role: "Software Engineer & Media Buyer",
  tagline: "I build the product — and run the paid campaigns that grow it.",
  location: "Nabeul, Tunisia",
  availability: "Open to relocation · France · Germany · Qatar · Saudi Arabia",
  email: "achrefbenabdallah1@gmail.com",
  phone: "+216 25 198 540",
  photo: "/achref.jpg",
  resumes: [
    {
      label: "Software Engineer CV",
      description: "Full-stack · Angular · Spring Boot",
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
    "I'm a full-stack software engineer with 2+ years building scalable web and mobile products across e-commerce, logistics, and healthcare — working day to day with Angular, JavaScript/TypeScript, and Spring Boot, including my end-of-studies internship in Germany.",
    "Over the past year I expanded into performance marketing, running Meta ad campaigns end-to-end: strategy, creative, landing pages, and optimization. That combination is my edge — I can build the product and drive the paid growth that scales it, without waiting on anyone.",
  ],
};

export type Stat = {
  value: string;
  label: string;
  sub?: string;
};

// Real figures pulled from the Dawema Meta ad account (May–Jul 2026).
export const mediaStats: Stat[] = [
  { value: "$21K+", label: "Revenue generated", sub: "tracked purchase value" },
  { value: "5.6×", label: "Purchase ROAS", sub: "return on ad spend" },
  { value: "1,262", label: "Purchases driven", sub: "at $3.01 cost each" },
  { value: "833K", label: "People reached", sub: "2.66M impressions" },
];

export const mediaHighlights = [
  "Planned and executed Meta Ads campaigns (ABO & CBO) supporting an e-commerce platform from launch through profitable growth.",
  "Produced creative in-house — filming and editing short-form video in CapCut, plus AI images and UGC-style videos — feeding a continuous creative-testing pipeline.",
  "Owned the full funnel: audience research, creative, landing pages, tracking, and daily optimization against ROAS, CPA, and CVR.",
  "Sustained a 3.22% CTR at a $0.04 CPC and a $1.42 CPM across the account.",
];

export type Project = {
  name: string;
  context: string;
  period: string;
  description: string;
  highlights: string[];
  tech: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Synexio",
    context: "Germany · End-of-studies internship",
    period: "Sep 2022 – Feb 2023",
    description:
      "Cloud solution for real-time visualization of factory production plans, built during my internship abroad in Germany.",
    highlights: [
      "Cut data-consultation time by 30% with optimized real-time views",
      "Improved interface responsiveness by 25% through UI/UX refinement",
      "Authored end-to-end test scenarios in Playwright for stability",
    ],
    tech: ["Angular", "TypeScript", "Playwright", "Azure", "Cumulocity"],
    featured: true,
  },
  {
    name: "CliniSeven",
    context: "Tunisia · Healthcare",
    period: "Jun 2021 – Aug 2021",
    description:
      "Clinical management web application for handling patient and clinical data securely.",
    highlights: [
      "Reduced API response times by 30% with Spring Boot services",
      "Reached 90% test coverage using SonarQube & SonarLint",
      "Prototyped intuitive UIs in Figma, cutting UX feedback issues by 20%",
    ],
    tech: ["Java", "Spring Boot", "Angular", "Figma", "SonarQube"],
    featured: true,
  },
  {
    name: "TomorrowChamp",
    context: "Tunisia · Sports tech",
    period: "May 2021 – Jun 2021",
    description:
      "Platform connecting football players with recruiters through a robust, scalable architecture.",
    highlights: [
      "Increased application performance by 25%",
      "Set up CI/CD with Jenkins, cutting release time by 30%",
    ],
    tech: ["Java", "Spring Boot", "Angular", "Jenkins", "Git"],
  },
  {
    name: "Dhayefni",
    context: "Tunisia · Travel",
    period: "Oct 2020 – Dec 2020",
    description:
      "Hotel booking management application with a secure, high-performance backend.",
    highlights: [
      "Raised mobile conversion rate by 25% with a responsive UI",
      "Cut average page response times by 30% (MySQL + Apache)",
    ],
    tech: ["Symfony", "JavaScript", "MySQL", "HTML/CSS", "Apache"],
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
    skills: ["Angular (v16)", "KnockoutJS", "Ionic", "React / Next.js"],
  },
  {
    title: "Backend",
    skills: ["Spring Boot", "Node.js", "Symfony", "REST APIs"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Azure", "Jenkins", "CI/CD", "Git / GitHub"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "MSSQL"],
  },
  {
    title: "Quality & Testing",
    skills: ["Playwright", "SonarQube", "SonarLint", "Code Review"],
  },
  {
    title: "Media Buying",
    skills: ["Meta Ads Manager", "ABO / CBO", "ROAS · CPA · CVR", "Pixel & Tracking"],
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
    role: "Software Engineer & Media Buyer",
    company: "Dawema",
    location: "Tunisia",
    period: "Oct 2025 – Present",
    summary:
      "E-commerce platform empowering vendors with marketing & delivery solutions. I lead technical delivery and run the paid-growth engine.",
    points: [
      "Directed end-to-end technical delivery, leading a cross-functional team of 15 from architecture through deployment.",
      "Planned and executed Meta Ads campaigns (ABO & CBO), reaching a 5.6× ROAS and 1,262 purchases.",
      "Aligned roadmap with business priorities, contributing to a 22% increase in platform sales.",
    ],
    tags: ["Technical Lead", "Meta Ads", "Agile / Scrum", "Team of 15"],
  },
  {
    role: "Full-Stack Developer",
    company: "LMobile",
    location: "Tunisia",
    period: "Jun 2023 – Mar 2025",
    summary:
      "Digitizing logistics and production processes for industrial clients.",
    points: [
      "Built Angular (v16) & KnockoutJS components, improving app responsiveness by 25%.",
      "Optimized data mapping for 20% faster, more reliable information retrieval.",
      "Led code reviews (−15% production bugs) and documentation (−30% onboarding time).",
    ],
    tags: ["Angular", "Node.js", "C#", "MSSQL", "SonarQube"],
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
