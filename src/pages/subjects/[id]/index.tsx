import NavMenuLayout from "@/components/common/layout/navMenu";
import { Divider, Menu, MenuProps } from "antd";
import React from "react";
import styles from "../styles.module.css";
import {
  CopyOutlined,
  EditOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";

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

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const itemsExamns: any = [
  {
    label: (
      <div className="menuItemExamTitle">
        <p>Exam 1</p>
        <button
          onClick={() => {
            alert("a");
          }}
        >
          <PlayCircleOutlined />
        </button>
      </div>
    ),
    key: "examen1",
    className: "menuItemExam",
    children: [{ label: "item 3" }, { label: "item 3" }],
  },
];
const SubjectDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <NavMenuLayout itemsMenu={itemsMenu}>
      <div className={styles.idContainer}>
        <h1>{id}</h1>
        <section style={{ width: "100%" }}>
          <h3>Examenes cargados</h3>
          <Menu
            items={itemsExamns}
            mode="inline"
            className={styles.menuExamns}
          />
        </section>
      </div>
    </NavMenuLayout>
  );
};

export default SubjectDetailPage;
