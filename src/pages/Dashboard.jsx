import React from "react";
import LeftNavigationBar from "../components/LeftNavigationBar";
import Table from "../components/TableComponent";
import TableContent from "../components/TableComponent";
import { Button } from "@mui/material";
import { useState } from "react";
import "../../src/index.css";
import Logo from "../assets/Logo Design.png";

export default function Dashboard() {
  const [direction, setDireaction] = useState("ltr");

  const handleLayoutChange = (language) => {
    setDireaction(language === "English" ? "ltr" : "rtl");
  };
  return (
    <div
      // className={`flex flex-col h-auto ${direction === "rtl" ? "rtl" : "ltr"}`}
      className="flex flex-col h-auto"
    >
      <div className="flex flex-row items-center justify-between w-full ">
        <img src={Logo} className="ml-4 size-40" />
        <div className="flex flex-row items-center">
          <Button
            className="text-lg text-black"
            onClick={() => handleLayoutChange("English")}
          >
            English
          </Button>
          <Button
            className="text-lg text-black"
            onClick={() => handleLayoutChange("Arabic")}
          >
            اَلْعَرَبِيَّةُ
          </Button>
        </div>
      </div>
      <div
        className={`flex flex-row gap-20  ml-4 ${
          direction === "rtl" ? "flex-row-reverse" : ""
        }`}
      >
        <LeftNavigationBar />
        <TableContent />
      </div>
    </div>
  );
}
