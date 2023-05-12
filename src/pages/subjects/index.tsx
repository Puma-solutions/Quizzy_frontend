import NavMenuLayout from "@/components/common/layout/navMenu";
import { useAuthContext } from "@/context/auth";
import { MenuProps } from "antd";
import React, { useEffect } from "react";

const itemsMenu: MenuProps["items"] = [
  {
    label: "Arquitectura",
    key: "/",
    className: "navItem",
  },
  {
    label: "Legislacion",
    key: "subjects",
    className: "navItem",
  },
  {
    label: "AM2",
    key: "others",
    className: "navItem",
  },
];

const SubjectsPage = () => {
  const { userValidator } = useAuthContext();
  useEffect(() => {
    userValidator();
  }, []);
  return <NavMenuLayout itemsMenu={itemsMenu}>Subjects</NavMenuLayout>;
};

export default SubjectsPage;
