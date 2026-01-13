export type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: {
    title: string;
    icon: string;
  }[];
};

export type ThemeContext = {
  theme: string;
  setTheme: (theme: string) => void;
  onChangeTheme: () => void;
};
