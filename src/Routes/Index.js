import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import MainLayout from "../Layout/Index";
import Login from "../container/Login/Index";
import LaginLayout from "../Layout/LoginLayout";
import LogContainer from "../container/RegisterContainer/Index.jsx";
import ResponsiveAppBar from "../container/NavBar/Index";
import Home from "../container/HomePage/Index";

export default function Links() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LaginLayout />}>
          <Route index path="/" element={<Login />} />
          <Route index path="/register" element={<LogContainer />} />
        </Route>

        <Route path="/" element={<ResponsiveAppBar />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}
