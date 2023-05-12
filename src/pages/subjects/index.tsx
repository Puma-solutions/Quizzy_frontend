import NavMenuLayout from "@/components/common/layout/navMenu";
import { MenuProps } from "antd";
import React from "react";
import styles from "./styles.module.css";

const itemsMenu: MenuProps["items"] = [
  {
    label: "Arquitectura",
    key: "arq",
    className: "navItem",
  },
  {
    label: "Legislacion",
    key: "legislacion",
    className: "navItem",
  },
  {
    label: "AM2",
    key: "am2",
    className: "navItem",
  },
];

const SubjectsPage = () => {
  return (
    <NavMenuLayout itemsMenu={itemsMenu}>
      <div className={styles.container}>
        <h1>Selecciona una materia para empezar!</h1>
      </div>
    </NavMenuLayout>
  );
};

export default SubjectsPage;
