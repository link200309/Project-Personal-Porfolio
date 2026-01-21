import React, { useState } from "react";
import { type lang } from "@/types";
import { content as en } from "@/data/en/Content";
import { content as es } from "@/data/es/Content";
import { LanguageContext } from "./LanguageContext";

type LanguageContextProps = {
  children: React.ReactNode;
};

const data = { en, es };

const LanguageProvider = ({ children }: LanguageContextProps) => {
  const [language, setLanguage] = useState<lang>("es");

  const onChangeLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "es" : "en"));
  };

  const value = { language, setLanguage, onChangeLanguage, t: data[language] };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
