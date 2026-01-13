import { createContext, useEffect, useState } from "react";
import { type ThemeContext as ThemeContextType } from "@/types";

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {},
  onChangeTheme: () => {},
});

interface ThemeContextProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeContextProps) {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [theme]);

  const onChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        onChangeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
