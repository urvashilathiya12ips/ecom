import { ThemeProvider } from "@emotion/react";
import React from "react";
import { Outlet } from "react-router-dom";
import { theme } from "../theme/Index";

export default function MainLayout() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Outlet />
      </ThemeProvider>
    </>
  );
}
