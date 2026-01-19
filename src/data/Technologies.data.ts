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

export const frontendTech: Technologies[] = [
  { image: logoHtml, color: "#EF652A", name: "HTML5" },
  { image: logoCss, color: "#30A9DC", name: "CSS3" },
  { image: logoJs, color: "#F7DF1E", name: "JavaScript" },
  { image: logoTs, color: "#3178C6", name: "TypeScript" },
  { image: logoReact, color: "#61DAFB", name: "ReactJS" },
  { image: logoReactNative, color: "#61DAFB", name: "React Native" },
  { image: logoTailwind, color: "#38BDF8", name: "TailwindCSS" },
  { image: logoRedux, color: "#764ABC", name: "Redux" },
];

export const backendTech: Technologies[] = [
  { image: logoExpress, color: "#fff", name: "ExpressJS" },
  { image: logoLaravel, color: "#EF652A", name: "Laravel" },
  { image: logoSpring, color: "#539E43", name: "Spring Boot" },
];

export const databaseTech: Technologies[] = [
  { image: logoMysql, color: "#0a5171", name: "MySQL" },
  { image: logoPostgresql, color: "#61DAFB", name: "PostgreSQL" },
  { image: logoMongodb, color: "#63d664", name: "MongoDB" },
];

export const tools: Technologies[] = [
  { image: logoGit, color: "#F05032", name: "Git" },
  { image: logoGithub, color: "#fff", name: "GitHub" },
  { image: logoDocker, color: "#2496ED", name: "Docker" },
  { image: logoPostman, color: "#FF6C37", name: "Postman" },
  { image: logoLinux, color: "#F7DF1E", name: "Linux" },
];
