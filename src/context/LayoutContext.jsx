import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useTranslation } from "react-i18next";

const LayoutContext = createContext();

export const useLayout = () => useContext(LayoutContext);

export const LayoutProvider = ({ children }) => {
  const [direction, setDirection] = useState("ltr");
  const { i18n } = useTranslation();

  const toggleLanguage = (lang) => {
    const isEnglish = lang === "English";
    i18n.changeLanguage(isEnglish ? "en" : "ar");
    setDirection(isEnglish ? "ltr" : "rtl");
  };
  useEffect(() => {
    setDirection(i18n.language === "en" ? "ltr" : "rtl");
  }, [i18n.language]);

  return (
    <LayoutContext.Provider value={{ direction, toggleLanguage }}>
      {children}
    </LayoutContext.Provider>
  );
};
