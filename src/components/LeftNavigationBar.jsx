import React from "react";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

export default function LeftNavigationBar() {
  return (
    <div>
      <Sidebar className="bg-transparent rounded-lg ">
        <Menu className="bg-blue-400 ">
          <SubMenu label="Charts" className="bg-blue-400 ">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <MenuItem className="bg-blue-400 "> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
          <MenuItem> Calendar </MenuItem>
          <MenuItem> Calendar </MenuItem>
          <MenuItem> Calendar </MenuItem>
          <MenuItem> Calendar </MenuItem>
          <MenuItem> Calendar </MenuItem>
          <MenuItem> Calendar </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}
