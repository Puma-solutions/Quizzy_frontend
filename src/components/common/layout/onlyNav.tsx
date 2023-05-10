import { Layout, MenuProps } from "antd";
import { Header } from "antd/lib/layout/layout";
import React from "react";
import Navbar from "../navbar/navbar";

interface DashboardProps {
  children: React.ReactNode;
}

const items: MenuProps["items"] = [
  {
    label: "Quizzy",
    key: "brand",
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

const OnlyNavLayout = ({ children }: DashboardProps): JSX.Element => {
  return (
    <Layout>
      <Header className="header">
        <Navbar items={items} />
      </Header>
      {children}
    </Layout>
  );
};

export default OnlyNavLayout;
