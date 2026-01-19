import React from "react";

export type Project = {
  title: string;
  description: string;
  application: string;
  front?: string;
  gallery?: string[];
  link: string;
  technologies: Technologies[];
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
