import { Layout, MenuProps } from "antd";
import { Header } from "antd/lib/layout/layout";
import React, { useEffect, useState } from "react";
import Navbar from "../navbar/navbar";
import { Metadata } from "next";
import LeftMenu from "../menu/menu";
import styles from "./styles.module.css";

interface DashboardProps {
  children: React.ReactNode;
  itemsMenu: MenuProps["items"];
}

const items: MenuProps["items"] = [
  {
    label: "Quizzy",
    key: "/",
    className: "navTitle",
  },
  {
    label: "Mis materias",
    key: "subjects",
    className: "navItem",
  },
  {
    label: "Otros",
    key: "others",
    className: "navItem",
  },
];

const NavMenuLayout = ({
  children,
  itemsMenu,
}: DashboardProps): JSX.Element => {
  return (
    <Layout className={styles.layoutNavMenu}>
      <Header className={styles.header}>
        <Navbar items={items} />
      </Header>
      <main className={styles.mainLayout}>
        <LeftMenu items={itemsMenu} />
        {children}
      </main>
    </Layout>
  );
};

export default NavMenuLayout;
