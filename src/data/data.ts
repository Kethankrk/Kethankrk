export interface projectType {
  title: string;
  description: string;
  stack: string[];
  github?: string;
  link?: string;
}

export interface ExperienceType {
  role: string;
  company: string;
  employment: string;
  timeline: string;
  location: string;
  workMode: string;
  /** Optional brand mark under `/public` */
  logoSrc?: string;
  /** Shown when `logoSrc` is omitted */
  initials?: string;
}

export const experiences: ExperienceType[] = [
  {
    role: "Co-Founder and R&D Engineer",
    company: "Dalton Vector",
    employment: "Full-time",
    timeline: "Jan 2026 - Present · 4 mos",
    location: "England, United Kingdom",
    workMode: "Hybrid",
    initials: "DV"
  },
  {
    role: "Research and Development Executive",
    company: "Exthgen",
    employment: "Full-time",
    timeline: "Apr 2025 - Dec 2025 · 9 mos",
    location: "Kozhikode, Kerala, India",
    workMode: "On-site",
    initials: "E",
  },
  {
    role: "Full Stack Developer",
    company: "Investersmate",
    employment: "Part-time",
    timeline: "Oct 2024 - Apr 2025 · 7 mos",
    location: "Australia",
    workMode: "Remote",
    initials: "IM",
  },
];

/** Grouped for consistency; keep aligned with on-site copy (hero / about). */
export const skills = {
  "AI & multimodal": ["Python", "PyTorch", "Hugging Face", "Speech / ASR"],
  "Structured AI & APIs": ["FastAPI", "BAML", "PostgreSQL"],
  "Shipping & UI": ["Docker", "Celery", "React", "Tailwind CSS"],
};

export const projects: projectType[] = [
  {
    title: "Vavapopo: Kerala Tour Itineraries",
    description:
      "Vavapopo specializes in crafting personalized travel itineraries, offering unique and immersive experiences in Kerala's scenic beauty and cultural heritage.",
    stack: ["Next js", "Tailwind CSS", "Firebase"],
    link: "https://vavapopo.com/",
  },
  {
    title: "Mu-Shelf: Problem-Solving Platform for Students",
    description:
      "Mu-Shelf, powered by Gtech Mulearn, is a platform where companies post problem statements, and students can submit solutions to earn rewards. I contributed to the backend development of this project, enabling smooth operations and functionality.",
    stack: ["Django", "Mysql", "Django Rest Framework"],
    github: "https://github.com/Kethankrk/mu-shelf",
  },
  {
    title: "Dev3.Peace: Developer Mental Health Platform",
    description:
      "Dev3.Peace is a hackathon project focused on improving developer mental health. The platform allows developers to gamify complex tasks and collaborate with the community to tackle challenges together, promoting well-being and productivity.",
    stack: ["React", "Django", "Tailwind CSS", "Postgresql"],
    github: "https://github.com/Kethankrk/Athmathon_24",
    link: "https://athmathon-24.vercel.app/",
  },
];
