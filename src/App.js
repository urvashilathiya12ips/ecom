import logo from "./logo.svg";
import "./App.css";
import React, { useState, createContext, useEffect } from "react";
import Links from "./Routes/Index";

export const UserContext = createContext("");
function App() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <UserContext.Provider value={{ open, setOpen }}>
        <Links />
      </UserContext.Provider>
    </>
  );
}

export default App;
