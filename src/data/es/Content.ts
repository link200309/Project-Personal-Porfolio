import { AboutMeDescription } from "./AboutMe.data";
import { experiences } from "./Experience.data";
import { projects } from "../en/Projects.data";

export const content = {
  navbar: {
    options: [
      { name: "Inicio", href: "#home" },
      { name: "Sobre mí", href: "#about" },
      { name: "Experiencia", href: "#experience" },
      { name: "Proyectos", href: "#projects" },
      { name: "Stack Tecnológico", href: "#tech-stack" },
    ],
  },

  hero: {
    title: "Ingeniero de Sistemas y Desarrollador",
    subtitle: "Siempre aprendiendo, siempre creando.",
    button: "Descargar CV",
  },

  aboutMe: {
    text: AboutMeDescription,
  },

  experience: experiences,
  projects: projects,

  techStack: {
    frontend: "Frontend",
    backend: "Backend",
    databases: "Bases de datos",
    tools: "Herramientas",
  },

  titles: {
    aboutMe: "Sobre mí",
    experience: "Experiencia",
    projects: "Proyectos",
    techStack: "Stack Tecnológico",
  },
};
