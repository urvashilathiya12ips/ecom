import logo from "./logo.svg";
import "./App.css";
import React, { useState, createContext, useEffect } from "react";
import Links from "./Routes/Index";
import { ProductListData } from "./utils/Constant";

export const UserContext = createContext("");
function App() {
  const [open, setOpen] = React.useState(false);
  const [find, setFind] = React.useState("");
  const [log, setlog] = useState(false);

  const handleInput = (event) => {
    setFind(event.target.value);
  };
  const serchdata = ProductListData.filter((data) =>
    data.title?.toLowerCase().includes(find?.toLowerCase())
  );
  return (
    <>
      <UserContext.Provider
        value={{ open, setOpen, serchdata, find, handleInput, log, setlog }}
      >
        <Links />
      </UserContext.Provider>
    </>
  );
}

export default App;
