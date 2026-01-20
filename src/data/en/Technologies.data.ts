//assets
//frontend
import logoHtml from "@/assets/images/technologies/logo-html.svg";
import logoCss from "@/assets/images/technologies/logo-css.svg";
import logoJs from "@/assets/images/technologies/logo-js.svg";
import logoTs from "@/assets/images/technologies/logo-ts.svg";
import logoReact from "@/assets/images/technologies/logo-react.svg";
import logoTailwind from "@/assets/images/technologies/logo-tailwindcss.svg";
import logoReactNative from "@/assets/images/technologies/logo-react-native.svg";
import logoRedux from "@/assets/images/technologies/logo-redux.svg";

//backend
import logoExpress from "@/assets/images/technologies/logo-express.svg";
import logoLaravel from "@/assets/images/technologies/logo-laravel.svg";
import logoSpring from "@/assets/images/technologies/logo-springboot.svg";
import logoPython from "@/assets/images/technologies/logo-python.svg";
import logoDjango from "@/assets/images/technologies/logo-django.svg";
import logoJava from "@/assets/images/technologies/logo-java.svg";

//data base
import logoMysql from "@/assets/images/technologies/logo-mysql.svg";
import logoMongodb from "@/assets/images/technologies/logo-mongo.svg";
import logoPostgresql from "@/assets/images/technologies/logo-posgres.svg";

//tools
import logoGit from "@/assets/images/technologies/logo-git.svg";
import logoGithub from "@/assets/images/technologies/logo-github.svg";
import logoDocker from "@/assets/images/technologies/logo-docker.svg";
import logoPostman from "@/assets/images/technologies/logo-postman.svg";
import logoLinux from "@/assets/images/technologies/logo-linux.png";

import { type Technologies } from "@/types";

export const technologies = {
  html: { image: logoHtml, color: "#EF652A", name: "HTML5" },
  css: { image: logoCss, color: "#30A9DC", name: "CSS3" },
  javascript: { image: logoJs, color: "#F7DF1E", name: "JavaScript" },
  typescript: { image: logoTs, color: "#3178C6", name: "TypeScript" },
  react: { image: logoReact, color: "#61DAFB", name: "ReactJS" },
  reactNative: {
    image: logoReactNative,
    color: "#61DAFB",
    name: "React Native",
  },
  tailwindcss: { image: logoTailwind, color: "#38BDF8", name: "TailwindCSS" },
  redux: { image: logoRedux, color: "#764ABC", name: "Redux" },
  express: { image: logoExpress, color: "#fff", name: "ExpressJS" },
  laravel: { image: logoLaravel, color: "#EF652A", name: "Laravel" },
  springboot: { image: logoSpring, color: "#539E43", name: "Spring Boot" },
  mysql: { image: logoMysql, color: "#0a5171", name: "MySQL" },
  postgresql: { image: logoPostgresql, color: "#61DAFB", name: "PostgreSQL" },
  mongodb: { image: logoMongodb, color: "#63d664", name: "MongoDB" },
  git: { image: logoGit, color: "#F05032", name: "Git" },
  github: { image: logoGithub, color: "#fff", name: "GitHub" },
  docker: { image: logoDocker, color: "#2496ED", name: "Docker" },
  postman: { image: logoPostman, color: "#FF6C37", name: "Postman" },
  linux: { image: logoLinux, color: "#F7DF1E", name: "Linux" },
  python: { image: logoPython, color: "#30A9DC", name: "Python+Tkinder" },
  django: { image: logoDjango, color: "#63d664", name: "Django" },
  java: { image: logoJava, color: "#007396", name: "Java+Swing" },
};

export const frontendTech: Technologies[] = [
  technologies.html,
  technologies.css,
  technologies.javascript,
  technologies.typescript,
  technologies.react,
  technologies.reactNative,
  technologies.tailwindcss,
  technologies.redux,
];

export const backendTech: Technologies[] = [
  technologies.express,
  technologies.laravel,
  technologies.springboot,
];

export const databaseTech: Technologies[] = [
  technologies.mysql,
  technologies.postgresql,
  technologies.mongodb,
];

export const tools: Technologies[] = [
  technologies.git,
  technologies.github,
  technologies.docker,
  technologies.postman,
  technologies.linux,
];
