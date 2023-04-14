"use client";

import React, { useState } from "react";
import router from "next/router";
import { AppstoreOutlined, UserOutlined } from "@ant-design/icons";
import { Menu, Avatar } from "antd";
import type { MenuProps } from "antd/es/menu";

type MenuItem = Required<MenuProps>["items"][number];

interface MenuCommonProps {
  items: MenuItem[];
  title: string;
}

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const MenuCommon = ({ items, title }: MenuCommonProps) => {
  return (
    <div className="menuHome">
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Avatar
          icon={<UserOutlined />}
          size={"large"}
          src={
            "https://images.pexels.com/photos/8778442/pexels-photo-8778442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
        />
        <p>Juan Jose Rodriguez</p>
      </div>
      <h2>{title}</h2>
      <Menu
        style={{
          width: 350,
          backgroundColor: "transparent",
          borderRight: "0px",
        }}
        onClick={() => {}}
        defaultOpenKeys={["sub1"]}
        items={items}
      />
    </div>
  );
};

export default MenuCommon;
