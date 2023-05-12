import { Layout, MenuProps } from "antd";
import { Header } from "antd/lib/layout/layout";
import React from "react";
import Navbar from "../navbar/navbar";
import { Metadata } from "next";

interface DashboardProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Sling Academy",
  description:
    "This is a meta description. Welcome to slingacademy.com. Happy coding and have a nice day",
};

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
