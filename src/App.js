import React, { useState, createContext, useEffect } from "react";
import "./App.css";
import Links from "./Routes/Index";
import { api } from "./Api/Index";

export const UserContext = createContext("");
function App() {
  const inputRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);
  const [product, setProduct] = React.useState([]);
  const [category, setCategory] = React.useState([]);
  const [categoryData, setcategoryData] = React.useState([]);
  const [FindProduct, setfindProduct] = useState();
  const getProductData = async () => {
    const Data = await api.product.get();
    setProduct(Data.data);
  };

  useEffect(() => {
    getProductData();
  }, []);

  const handleInput = async (event) => {
    setfindProduct(event.target.value);
    const Serch = await api.search.get(event.target.value);
    setCategory(Serch.data);
    setcategoryData(Serch.data);
  };

  return (
    <>
      <UserContext.Provider
        value={{
          open,
          setOpen,
          setfindProduct,
          product,
          handleInput,
          FindProduct,
          setProduct,
          categoryData,
          setcategoryData,
          category,
          setCategory,
        }}
      >
        <Links />
      </UserContext.Provider>
    </>
  );
}

export default App;
