import { technologies } from "./Technologies.data";

import trackingDotaFront from "@/assets/images/projects/projectTracker/front.png";
import trackingDotaScreen1 from "@/assets/images/projects/projectTracker/screen1.webp";
import trackingDotaScreen2 from "@/assets/images/projects/projectTracker/screen2.webp";
import trackingDotaScreen3 from "@/assets/images/projects/projectTracker/screen3.webp";
import trackingDotaScreen4 from "@/assets/images/projects/projectTracker/screen4.webp";
import trackingDotaScreen5 from "@/assets/images/projects/projectTracker/screen5.webp";

import busFront from "@/assets/images/projects/projectBus/front.png";
import busScreen1 from "@/assets/images/projects/projectBus/screen1.png";
import busScreen2 from "@/assets/images/projects/projectBus/screen2.png";
import busScreen3 from "@/assets/images/projects/projectBus/screen3.png";
import busScreen4 from "@/assets/images/projects/projectBus/screen4.png";
import busScreen5 from "@/assets/images/projects/projectBus/screen5.png";

import teachingFront from "@/assets/images/projects/projectPythonTeaching/front.png";
import teachingScreen1 from "@/assets/images/projects/projectPythonTeaching/screen1.png";
import teachingScreen2 from "@/assets/images/projects/projectPythonTeaching/screen2.png";
import teachingScreen3 from "@/assets/images/projects/projectPythonTeaching/screen3.png";
import teachingScreen4 from "@/assets/images/projects/projectPythonTeaching/screen4.png";
import teachingScreen5 from "@/assets/images/projects/projectPythonTeaching/screen5.png";
import teachingScreen6 from "@/assets/images/projects/projectPythonTeaching/screen6.png";

import olympicScreen1 from "@/assets/images/projects/projectOlympics/screen1.jpg";
import olympicScreen2 from "@/assets/images/projects/projectOlympics/screen2.png";
import olympicScreen3 from "@/assets/images/projects/projectOlympics/screen3.png";
import olympicScreen4 from "@/assets/images/projects/projectOlympics/screen4.png";
import olympicScreen5 from "@/assets/images/projects/projectOlympics/screen5.png";
import olympicScreen6 from "@/assets/images/projects/projectOlympics/screen6.png";

import sambaScreen1 from "@/assets/images/projects/projectSambaManager/screen1.png";
import sambaScreen2 from "@/assets/images/projects/projectSambaManager/screen2.png";
import sambaScreen3 from "@/assets/images/projects/projectSambaManager/screen3.png";
import sambaScreen4 from "@/assets/images/projects/projectSambaManager/screen4.png";

import rentingScreen1 from "@/assets/images/projects/projectRentingFriends/screen1.jpg";
import rentingScreen2 from "@/assets/images/projects/projectRentingFriends/screen2.jpg";
import rentingScreen3 from "@/assets/images/projects/projectRentingFriends/screen3.jpg";
import rentingScreen4 from "@/assets/images/projects/projectRentingFriends/screen4.jpg";

import gameFront from "@/assets/images/projects/projectDesktopGames/front.png";
import gameScreen1 from "@/assets/images/projects/projectDesktopGames/screen1.png";
import gameScreen2 from "@/assets/images/projects/projectDesktopGames/screen2.png";
import gameScreen3 from "@/assets/images/projects/projectDesktopGames/screen3.png";
import gameScreen4 from "@/assets/images/projects/projectDesktopGames/screen4.png";

import { type Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Tracking for Dota 2",
    titleEs: "Tracker para Dota 2",
    application: "Web Page",
    applicationEs: "Página Web",
    front: trackingDotaFront,
    gallery: [
      trackingDotaScreen1,
      trackingDotaScreen2,
      trackingDotaScreen3,
      trackingDotaScreen4,
      trackingDotaScreen5,
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
    front: busFront,
    gallery: [busScreen1, busScreen2, busScreen3, busScreen4, busScreen5],
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
    front: teachingFront,
    gallery: [
      teachingScreen1,
      teachingScreen2,
      teachingScreen3,
      teachingScreen4,
      teachingScreen5,
      teachingScreen6,
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
    front: olympicScreen1,
    gallery: [
      olympicScreen1,
      olympicScreen2,
      olympicScreen3,
      olympicScreen4,
      olympicScreen5,
      olympicScreen6,
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
    front: sambaScreen1,
    gallery: [sambaScreen1, sambaScreen2, sambaScreen3, sambaScreen4],
    technologies: [technologies.python, technologies.linux],
  },
  {
    title: "Renting friends platform",
    titleEs: "Plataforma de alquiler de amigos",
    application: "Web Page",
    applicationEs: "Página Web",
    front: rentingScreen1,
    gallery: [rentingScreen1, rentingScreen2, rentingScreen3, rentingScreen4],
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
    front: gameFront,
    gallery: [gameScreen1, gameScreen2, gameScreen3, gameScreen4],
    technologies: [technologies.java],
  },
];
