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
import project1 from "@/assets/images/projects/sampleProject.png";
import { type Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Aplicación web para trackear Dota 2 y gestionar logros",
    description:
      "Participé en el desarrollo del sistema, con un enfoque en la creación de interfaces, endopoints y el GSI (Game State Integration) para el juego.",
    link: "",
    image: project1,
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
    title: "Aplicación móvil para reserva de pasajes de bus",
    description:
      "Encargado del diseño y desarrollo de las interfaces de usuario, así como la creación de APIs.",
    link: "",
    image: "",
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
    title: "Plataforma web para la enseñanza de Python",
    description:
      "Responsable del diseño y desarrollo de las interfaces de usuario y de la implementación de un editor de código interactivo para ejercicios prácticos.",
    link: "",
    image: "",
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
    title:
      "Aplicación web para inscripciones a las Olimpiadas Oh! Sansi (Proyecto Académico)",
    description:
      "Me encargué principalmente de la inscripción manual, validaciones de formularios y las APIs necesarias para su funcionamiento.",
    link: "",
    image: "",
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
    title: "Aplicación de escritorio para gestión de servidor Samba en Ubuntu",
    description:
      "Desarrollé la interfaz gráfica y la ejecución de comandos del sistema.",
    link: "",
    image: "",
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
    title: "Aplicación web para alquiler de amigos",
    description:
      "Trabajé tanto en la creación de interfaces como en el desarrollo de APIs para la comunicación entre módulos.",
    link: "",
    image: "",
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
    title: "Juegos de escritorio",
    description:
      "Desarrollé juegos como tres en raya, serpiente y plataformas 2D simples.",
    link: "",
    image: "",
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
