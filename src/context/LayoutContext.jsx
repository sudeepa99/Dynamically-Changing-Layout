import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const LayoutContext = createContext();

export const useLayout = () => useContext(LayoutContext);

export const LayoutProvider = ({ children }) => {
  const [direction, setDirection] = useState("ltr");

  const toggleDirection = (language) => {
    setDirection(language === "English" ? "ltr" : "rtl");
  };
  return (
    <LayoutContext.Provider value={{ direction, toggleDirection }}>
      {children}
    </LayoutContext.Provider>
  );
};
