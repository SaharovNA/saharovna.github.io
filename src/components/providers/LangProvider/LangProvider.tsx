import React, { FC, ReactNode, useState, createContext } from 'react';
import { useTranslation, Trans } from 'react-i18next';


//type Language = "en" | "ru";

interface LangContextType {
  language: string;
  toggleLanguage: () => void;
}

export const LangContext = createContext<LangContextType>({
  language: "ru",
  toggleLanguage: () => {
    //Empty
  },
});

type LangProviderProps = {
  children: ReactNode;
};


export const LangProvider = ({ children }: LangProviderProps) => {
  const { i18n } = useTranslation();

  const [language, setLanguage] = useState<string>(i18n.language);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => {
      //debugger;
      const newLanguage = prevLanguage === "ru" ? "en" : "ru";
      i18n.changeLanguage(newLanguage);

      return newLanguage;
    });
  };

  return (
    <LangContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LangContext.Provider>
  );
};
