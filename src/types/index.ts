import React from "react";

export type Project = {
  title: string;
  description: string;
  application: string;
  gallery?: string[];
  link: string;
  technologies: {
    title: string;
    icon: string;
  }[];
};

export type Experience = {
  title: string;
  date: string;
  descriptions: React.JSX.Element[];
};

export type Technologies = {
  image: string;
  color: string;
  name: string;
};

export type ThemeContext = {
  theme: string;
  setTheme: (theme: string) => void;
  onChangeTheme: () => void;
};
