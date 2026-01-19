import React, { createContext, useState } from "react";
import { type LanguageContext as LanguageContextType } from "@/types";

export const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  onChangeLanguage: () => {},
});

type LanguageContextProps = {
  children: React.ReactNode;
};

const LanguageProvider = ({ children }: LanguageContextProps) => {
  const [language, setLanguage] = useState("en");

  const onChangeLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "es" : "en"));
  };

  return (
    <LanguageContext value={{ language, setLanguage, onChangeLanguage }}>
      {children}
    </LanguageContext>
  );
};

export default LanguageProvider;
