import { Menu } from "antd";
import React, { useState } from "react";
import type { MenuProps } from "antd";
import { useRouter } from "next/router";

interface LeftMenuProps {
  items: MenuProps["items"];
}

const LeftMenu = ({ items }: LeftMenuProps) => {
  const { push } = useRouter();
  const [current, setCurrent] = useState("");
  const onClick: MenuProps["onClick"] = (e) => {
    push(e.key.toString());
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="vertical"
      items={items}
      className="LeftMenu"
    />
  );
};

export default LeftMenu;
