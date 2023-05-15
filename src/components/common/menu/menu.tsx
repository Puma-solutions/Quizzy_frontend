import { Button, Divider, Menu } from "antd";
import React, { useState } from "react";
import type { MenuProps } from "antd";
import { useRouter } from "next/router";
import styles from "./styles.module.css";

interface LeftMenuProps {
  items: MenuProps["items"];
}

const LeftMenu = ({ items }: LeftMenuProps) => {
  const { push } = useRouter();
  const [current, setCurrent] = useState("");
  const onClick: MenuProps["onClick"] = (e) => {
    push("/subjects/" + e.key.toString());
    setCurrent(e.key);
  };
  return (
    <div className={styles.menu}>
      <h1>Mis materias</h1>
      <Divider />
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="vertical"
        items={items}
        className={styles.menuItems}
      />
      <Divider />
      <Button className={styles.menuButton}>Agregar materia</Button>
    </div>
  );
};

export default LeftMenu;
