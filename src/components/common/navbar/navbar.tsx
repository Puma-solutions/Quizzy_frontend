import { Menu } from "antd";
import React, { useState } from "react";
import type { MenuProps } from "antd";

interface navbarProps {
  items: MenuProps["items"];
}

const Navbar = ({ items }: navbarProps) => {
  const [current, setCurrent] = useState("brand");
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      className="navbar"
    />
  );
};

export default Navbar;
