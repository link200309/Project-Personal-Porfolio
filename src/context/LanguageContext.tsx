import React, { createContext, useState } from "react";
import { type LanguageContext as LanguageContextType } from "@/types";
import { content as en } from "@/data/en/Content";
import { content as es } from "@/data/es/Content";

type lang = "en" | "es";

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  onChangeLanguage: () => {},
  t: {},
});

type LanguageContextProps = {
  children: React.ReactNode;
};

const data = { en, es };

const LanguageProvider = ({ children }: LanguageContextProps) => {
  const [language, setLanguage] = useState<lang>("es");

  const onChangeLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "es" : "en"));
  };

  console.log("Current language:", data[language]);

  const value = { language, setLanguage, onChangeLanguage, t: data[language] };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => React.useContext(LanguageContext);
export default LanguageProvider;
