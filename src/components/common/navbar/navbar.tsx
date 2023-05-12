import { Menu } from "antd";
import React, { useState } from "react";
import type { MenuProps } from "antd";
import { useRouter } from "next/router";

interface navbarProps {
  items: MenuProps["items"];
}

const Navbar = ({ items }: navbarProps) => {
  const { push } = useRouter();
  const [current, setCurrent] = useState("brand");
  const onClick: MenuProps["onClick"] = (e) => {
    push(e.key.toString());
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
