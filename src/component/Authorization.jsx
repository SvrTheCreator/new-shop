import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Menu } from "antd";

const authorization = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  height: "100vh",
};

export default function Authorization() {
  const items = [
    {
      label: <Link to="login">Login</Link>,
      key: "login",
    },
    {
      label: <Link to="registration">Registration</Link>,
      key: "registration",
    },
  ];

  return (
    <div style={authorization}>
      <Menu
        style={{ backgroundColor: "transparent" }}
        mode="horizontal"
        disabledOverflow={true}
        items={items}
      />
      <Outlet />
    </div>
  );
}
