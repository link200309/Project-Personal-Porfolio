import { createContext } from "react";
import { type LanguageContext as LanguageContextType } from "@/types";
import { content as es } from "@/data/es/Content";

export const LanguageContext = createContext<LanguageContextType>({
  language: "es",
  setLanguage: () => {},
  onChangeLanguage: () => {},
  t: es,
});
