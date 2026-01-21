import React from "react";

export type Project = {
  title: string;
  titleEs?: string;
  application: string;
  applicationEs?: string;
  front?: string;
  gallery?: string[];
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

export type lang = "en" | "es";

export type LanguageContext = {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<lang>>;
  onChangeLanguage: () => void;
  t: Content;
};

export type Content = typeof import("@/data/en/Content").content;
