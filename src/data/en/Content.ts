import { footer } from "framer-motion/client";
import { AboutMeDescription } from "./AboutMe.data";
import { experiences } from "./Experience.data";
import { projects } from "./Projects.data";

export const content = {
  navbar: {
    options: [
      { name: "Home", href: "#home" },
      { name: "About me", href: "#about" },
      { name: "Experience", href: "#experience" },
      { name: "Projects", href: "#projects" },
      { name: "Tech Stack", href: "#tech-stack" },
    ],
  },

  hero: {
    title: "System Engineer and Developer",
    subtitle: "Always learning, always creating.",
    button: "Download CV",
  },

  aboutMe: {
    text: AboutMeDescription,
  },

  experience: experiences,
  projects: projects,

  techStack: {
    frontend: "Frontend",
    backend: "Backend",
    databases: "Data bases",
    tools: "Tools",
  },

  titles: {
    aboutMe: "About Me",
    experience: "Experience",
    projects: "Projects",
    techStack: "Tech Stack",
  },

  footer: {
    phrase:
      "© 2026 The Legend of John. Built with passion, code and imagination.",
    credits:
      "Decorative images © Bilibili / BeDream, Aniplex. Used for non-commercial, illustrative purposes.",
  },
};
