import { Button } from "@mui/material";
import React from "react";
import LeftNavigationBar from "../components/LeftNavigationBar";
import TableContent from "../components/TableComponent";
import { useLayout } from "../context/LayoutContext";
import { useTransition } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export default function Homepage() {
  const { direction, toggleLanguage } = useLayout();

  return (
    <div>
      <div className="flex flex-row justify-end mr-20">
        <Button
          className="text-lg text-black"
          onClick={() => toggleLanguage("English")}
        >
          English
        </Button>
        <Button
          className="text-lg text-black"
          onClick={() => toggleLanguage("Arabic")}
        >
          اَلْعَرَبِيَّةُ
        </Button>
      </div>

      <div
        dir={direction}
        className={`flex flex-row gap-20 mt-16 ml-4 ${
          direction === "rtl" ? "flex-row-reverse justify-end" : "justify-start"
        }`}
      >
        {direction === "ltr" ? (
          <>
            <LeftNavigationBar />
            <TableContent />
          </>
        ) : (
          <>
            <TableContent />
            <LeftNavigationBar />
          </>
        )}
      </div>
    </div>
  );
}
