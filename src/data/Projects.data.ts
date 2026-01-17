import reactLogo from "@/assets/images/technologies/logo-react.svg";
import expressLogo from "@/assets/images/technologies/logo-express.svg";
import postgresLogo from "@/assets/images/technologies/logo-posgres.svg";
import reactNativeLogo from "@/assets/images/technologies/logo-react.svg";
import prismaLogo from "@/assets/images/technologies/logo-prisma.svg";
import tailwindLogo from "@/assets/images/technologies/logo-tailwindcss.svg";
import springLogo from "@/assets/images/technologies/logo-springboot.svg";
import mavenLogo from "@/assets/images/technologies/logo-maven.svg";
import laravelLogo from "@/assets/images/technologies/logo-laravel.svg";
import pythonLogo from "@/assets/images/technologies/logo-python.svg";
import djangoLogo from "@/assets/images/technologies/logo-django.svg";
import javaLogo from "@/assets/images/technologies/logo-java.svg";

import trackingDotaScreen1 from "@/assets/images/projects/projectTracker/screen1.webp";
import trackingDotaScreen2 from "@/assets/images/projects/projectTracker/screen2.webp";
import trackingDotaScreen3 from "@/assets/images/projects/projectTracker/screen3.webp";
import trackingDotaScreen4 from "@/assets/images/projects/projectTracker/screen4.webp";
import trackingDotaScreen5 from "@/assets/images/projects/projectTracker/screen5.webp";

import busScreen1 from "@/assets/images/projects/projectBus/screen1.png";
import busScreen2 from "@/assets/images/projects/projectBus/screen2.png";
import busScreen3 from "@/assets/images/projects/projectBus/screen3.png";
import busScreen4 from "@/assets/images/projects/projectBus/screen4.png";
import busScreen5 from "@/assets/images/projects/projectBus/screen5.png";

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

import gameScreen1 from "@/assets/images/projects/projectDesktopGames/screen1.png";
import gameScreen2 from "@/assets/images/projects/projectDesktopGames/screen2.png";
import gameScreen3 from "@/assets/images/projects/projectDesktopGames/screen3.png";
import gameScreen4 from "@/assets/images/projects/projectDesktopGames/screen4.png";
import gameScreen5 from "@/assets/images/projects/projectDesktopGames/screen5.png";

import { type Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Tracking for Dota 2",
    description:
      "Participé en el desarrollo del sistema, con un enfoque en la creación de interfaces, endopoints y el GSI (Game State Integration) para el juego.",
    link: "",
    application: "Web Page",
    gallery: [
      trackingDotaScreen1,
      trackingDotaScreen2,
      trackingDotaScreen3,
      trackingDotaScreen4,
      trackingDotaScreen5,
    ],
    technologies: [
      {
        title: "React",
        icon: reactLogo,
      },
      {
        title: "TypeScript",
        icon: reactLogo,
      },
      {
        title: "Express",
        icon: expressLogo,
      },
      {
        title: "MongoDB",
        icon: postgresLogo,
      },
    ],
  },
  {
    title: "Bus ticket reservation",
    description:
      "Encargado del diseño y desarrollo de las interfaces de usuario, así como la creación de APIs.",
    link: "",
    gallery: [busScreen1, busScreen2, busScreen3, busScreen4, busScreen5],
    application: "Mobile App",
    technologies: [
      {
        title: "React Native",
        icon: reactNativeLogo,
      },
      {
        title: "Express",
        icon: expressLogo,
      },
      {
        title: "Prisma",
        icon: prismaLogo,
      },
    ],
  },
  {
    title: "Python teaching platform",
    description:
      "Responsable del diseño y desarrollo de las interfaces de usuario y de la implementación de un editor de código interactivo para ejercicios prácticos.",
    link: "",
    gallery: [
      teachingScreen1,
      teachingScreen2,
      teachingScreen3,
      teachingScreen4,
      teachingScreen5,
      teachingScreen6,
    ],
    application: "Web Page",
    technologies: [
      {
        title: "React",
        icon: reactLogo,
      },
      {
        title: "Tailwind",
        icon: tailwindLogo,
      },
      {
        title: "Spring Boot",
        icon: springLogo,
      },
      {
        title: "Maven",
        icon: mavenLogo,
      },
    ],
  },
  {
    title: "Registration for the Oh! Sansi Olympics (Academic Project)",
    description:
      "Me encargué principalmente de la inscripción manual, validaciones de formularios y las APIs necesarias para su funcionamiento.",
    link: "",
    gallery: [
      olympicScreen1,
      olympicScreen2,
      olympicScreen3,
      olympicScreen4,
      olympicScreen5,
      olympicScreen6,
    ],
    application: "Web Page",
    technologies: [
      {
        title: "React",
        icon: reactLogo,
      },
      {
        title: "Laravel",
        icon: laravelLogo,
      },
      {
        title: "Eloquent ORM",
        icon: "",
      },
    ],
  },
  {
    title: "Samba Server Manager for Ubuntu",
    description:
      "Desarrollé la interfaz gráfica y la ejecución de comandos del sistema.",
    link: "",
    gallery: [sambaScreen1, sambaScreen2, sambaScreen3, sambaScreen4],
    application: "Desktop App",
    technologies: [
      {
        title: "Python",
        icon: pythonLogo,
      },
      {
        title: "Tkinter",
        icon: "",
      },
    ],
  },
  {
    title: "Renting friends platform",
    description:
      "Trabajé tanto en la creación de interfaces como en el desarrollo de APIs para la comunicación entre módulos.",
    link: "",
    gallery: [rentingScreen1, rentingScreen2, rentingScreen3, rentingScreen4],
    application: "Web Page",
    technologies: [
      {
        title: "React",
        icon: reactLogo,
      },
      {
        title: "Django",
        icon: djangoLogo,
      },
      {
        title: "Django ORM",
        icon: djangoLogo,
      },
    ],
  },
  {
    title: "Desktop games",
    description:
      "Desarrollé juegos como tres en raya, serpiente y plataformas 2D simples.",
    link: "",
    gallery: [gameScreen1, gameScreen2, gameScreen3, gameScreen4, gameScreen5],
    application: "Desktop App",
    technologies: [
      {
        title: "Java",
        icon: javaLogo,
      },
      {
        title: "Swing",
        icon: "",
      },
    ],
  },
];
