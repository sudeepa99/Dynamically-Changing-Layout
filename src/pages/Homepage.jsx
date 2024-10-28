import { Button } from "@mui/material";
import React from "react";
import LeftNavigationBar from "../components/LeftNavigationBar";
import TableContent from "../components/TableComponent";
import { useLayout } from "../context/LayoutContext";

export default function Homepage() {
  const { direction, toggleDirection } = useLayout();
  return (
    <div>
      <div className="flex flex-row justify-end mr-20">
        <Button
          className="text-lg text-black"
          onClick={() => toggleDirection("English")}
        >
          English
        </Button>
        <Button
          className="text-lg text-black"
          onClick={() => toggleDirection("Arabic")}
        >
          اَلْعَرَبِيَّةُ
        </Button>
      </div>

      {/* Content area with Left Navigation and Table */}
      <div
        className={`flex flex-row gap-20 mt-16 ml-4 ${
          direction === "rtl" ? "flex-row-reverse" : ""
        }`}
      >
        <LeftNavigationBar />
        <TableContent />
      </div>
    </div>
  );
}
