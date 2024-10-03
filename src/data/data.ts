export interface projectType {
  title: string;
  description: string;
  stack: string[];
  github?: string;
  link?: string;
}

export const skills = {
  "Programming Languages": [
    "Python",
    "Javascript",
    "Golang",
    "C",
    "Java",
    "Dart",
    "Rust",
  ],
  Domains: ["Web Development", "Android Development"],
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
