import NavMenuLayout from "@/components/common/layout/navMenu";
import { MenuProps } from "antd";
import React from "react";
import styles from "./styles.module.css";
import { CopyOutlined } from "@ant-design/icons";

const itemsMenu: MenuProps["items"] = [
  {
    label: "Arquitectura",
    key: "arq",
    className: "menuItem",
    icon: <CopyOutlined />,
  },
  {
    label: "Legislacion",
    key: "legislacion",
    className: "menuItem",
    icon: <CopyOutlined />,
  },
  {
    label: "AM2",
    key: "am2",
    className: "menuItem",
    icon: <CopyOutlined />,
  },
  {
    label: "Ingeniería",
    key: "ingenieria",
    className: "menuItem",
    icon: <CopyOutlined />,
  },
  {
    label: "Diseño",
    key: "diseno",
    className: "menuItem",
    icon: <CopyOutlined />,
  },
  {
    label: "Arquitectura de Software",
    key: "arquitectura-software",
    className: "menuItem",
    icon: <CopyOutlined />,
  },
  {
    label: "Desarrollo Web",
    key: "desarrollo-web",
    className: "menuItem",
    icon: <CopyOutlined />,
  },
  {
    label: "Desarrollo Móvil",
    key: "desarrollo-movil",
    className: "menuItem",
    icon: <CopyOutlined />,
  },
  {
    label: "Testing",
    key: "testing",
    className: "menuItem",
    icon: <CopyOutlined />,
  },
  {
    label: "Mantenimiento",
    key: "mantenimiento",
    className: "menuItem",
    icon: <CopyOutlined />,
  },
  {
    label: "Operaciones",
    key: "operaciones",
    className: "menuItem",
    icon: <CopyOutlined />,
  },
  {
    label: "Seguridad",
    key: "seguridad",
    className: "menuItem",
    icon: <CopyOutlined />,
  },
];

const SubjectsPage = () => {
  return (
    <NavMenuLayout itemsMenu={itemsMenu}>
      <div className={styles.container}>
        <h1>Selecciona una materia para empezar!</h1>
        <img src="./images/subjectHome.gif" alt="" />
      </div>
    </NavMenuLayout>
  );
};

export default SubjectsPage;
