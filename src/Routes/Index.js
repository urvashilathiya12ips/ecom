import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import LaginLayout from "../Layout/LoginLayout";
import Login from "../container/Auth/Login/Index";
import LogContainer from "../container/Auth/RegisterContainer/Index";
import MainLayout from "../Layout/Index";
import Home from "../container/App/HomePageContainer/HomePage/Index";
import CategarySidebar from "../container/App/HomePageContainer/CategarySidebar/Index";

export default function Links() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LaginLayout />}>
          <Route index path="/" element={<Login />} />
          <Route index path="/register" element={<LogContainer />} />
        </Route>

        <Route path="/" element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route
            path="/mensColths"
            element={<CategarySidebar type="Mens wear" />}
          />
          <Route
            path="/womenColths"
            element={<CategarySidebar type="Womens Wear" />}
          />
          <Route
            path="/footwear"
            element={<CategarySidebar type="Footwear" />}
          />
          <Route
            path="/Kidswear"
            element={<CategarySidebar type="Kids wear" />}
          />
          <Route
            path="/HomeAppliance"
            element={<CategarySidebar type="HomeAppliance" />}
          />
          <Route
            path="/Jewelary"
            element={<CategarySidebar type="Jewelary" />}
          />
        </Route>
      </Routes>
    </>
  );
}
