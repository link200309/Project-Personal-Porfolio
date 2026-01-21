import { technologies } from "./Technologies.data";
import { type Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Tracking for Dota 2",
    titleEs: "Tracker para Dota 2",
    application: "Web Page",
    applicationEs: "Página Web",
    front: "/projects/projectTracker/front.webp",
    gallery: [
      "/projects/projectTracker/screen1.webp",
      "/projects/projectTracker/screen2.webp",
      "/projects/projectTracker/screen3.webp",
      "/projects/projectTracker/screen4.webp",
      "/projects/projectTracker/screen5.webp",
    ],
    technologies: [
      technologies.react,
      technologies.typescript,
      technologies.tailwindcss,
      technologies.express,
      technologies.mongodb,
      technologies.docker,
    ],
  },

  {
    title: "Bus ticket reservation",
    titleEs: "Reserva de boletos de autobús",
    application: "Mobile App",
    applicationEs: "Aplicación Móvil",
    front: "/projects/projectBus/front.webp",
    gallery: [
      "/projects/projectBus/screen1.webp",
      "/projects/projectBus/screen2.webp",
      "/projects/projectBus/screen3.webp",
      "/projects/projectBus/screen4.webp",
      "/projects/projectBus/screen5.webp",
    ],
    technologies: [
      technologies.reactNative,
      technologies.express,
      technologies.postgresql,
    ],
  },

  {
    title: "Python teaching platform",
    titleEs: "Plataforma de enseñanza de Python",
    application: "Web Page",
    applicationEs: "Página Web",
    front: "/projects/projectPythonTeaching/front.webp",
    gallery: [
      "/projects/projectPythonTeaching/screen1.webp",
      "/projects/projectPythonTeaching/screen2.webp",
      "/projects/projectPythonTeaching/screen3.webp",
      "/projects/projectPythonTeaching/screen4.webp",
      "/projects/projectPythonTeaching/screen5.webp",
      "/projects/projectPythonTeaching/screen6.webp",
    ],
    technologies: [
      technologies.react,
      technologies.tailwindcss,
      technologies.springboot,
      technologies.postgresql,
      technologies.docker,
    ],
  },

  {
    title: "Registration for the Oh! Sansi Olympics (Academic Project)",
    titleEs: "Registro para las Olimpiadas Oh! Sansi (Proyecto Académico)",
    application: "Web Page",
    applicationEs: "Página Web",
    front: "/projects/projectOlympics/screen1.webp",
    gallery: [
      "/projects/projectOlympics/screen1.webp",
      "/projects/projectOlympics/screen2.webp",
      "/projects/projectOlympics/screen3.webp",
      "/projects/projectOlympics/screen4.webp",
      "/projects/projectOlympics/screen5.webp",
      "/projects/projectOlympics/screen6.webp",
    ],
    technologies: [
      technologies.react,
      technologies.laravel,
      technologies.mysql,
    ],
  },

  {
    title: "Samba Server Manager for Linux",
    titleEs: "Administrador de Servidor Samba para Linux",
    application: "Desktop App",
    applicationEs: "Aplicación de Escritorio",
    front: "/projects/projectSambaManager/screen1.webp",
    gallery: [
      "/projects/projectSambaManager/screen1.webp",
      "/projects/projectSambaManager/screen2.webp",
      "/projects/projectSambaManager/screen3.webp",
      "/projects/projectSambaManager/screen4.webp",
    ],
    technologies: [technologies.python, technologies.linux],
  },

  {
    title: "Renting friends platform",
    titleEs: "Plataforma de alquiler de amigos",
    application: "Web Page",
    applicationEs: "Página Web",
    front: "/projects/projectRentingFriends/screen1.webp",
    gallery: [
      "/projects/projectRentingFriends/screen1.webp",
      "/projects/projectRentingFriends/screen2.webp",
      "/projects/projectRentingFriends/screen3.webp",
      "/projects/projectRentingFriends/screen4.webp",
    ],
    technologies: [
      technologies.react,
      technologies.django,
      technologies.postgresql,
    ],
  },

  {
    title: "Desktop games",
    titleEs: "Juegos de escritorio",
    application: "Desktop App",
    applicationEs: "Aplicación de Escritorio",
    front: "/projects/projectDesktopGames/front.webp",
    gallery: [
      "/projects/projectDesktopGames/screen1.webp",
      "/projects/projectDesktopGames/screen2.webp",
      "/projects/projectDesktopGames/screen3.webp",
      "/projects/projectDesktopGames/screen4.webp",
    ],
    technologies: [technologies.java],
  },
];
