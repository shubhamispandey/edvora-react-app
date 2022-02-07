import React, { useState, useEffect } from "react";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";
import Sidebar from "./components/filter/sidebar";
import Content from "./components/content/content";

const App = () => {
  const prefersDarkMode = "dark";
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: "dark",
        },
      }),
    [prefersDarkMode]
  );
  const [products, setProducts] = useState([]);
  const [uniqueProducts, setUniqueProducts] = useState([]);

  const [filterProduct, setFilterProduct] = useState("");
  const [filterState, setFilterState] = useState("");
  const [filterCity, setFilterCity] = useState("");

  const getProducts = async () => {
    try {
      const url = `https://assessment-edvora.herokuapp.com`;
      let res = await fetch(url);
      let data = await res.json();
      setProducts(data);
      console.log(new Set(data.map((product) => product.product_name)));
      setUniqueProducts([
        ...new Set(data.map((product) => product.product_name)),
      ]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <Sidebar
          products={products}
          uniqueProducts={uniqueProducts}
          setUniqueProducts={setUniqueProducts}
          filterProduct={filterProduct}
          setFilterProduct={setFilterProduct}
          filterState={filterState}
          setFilterState={setFilterState}
          filterCity={filterCity}
          setFilterCity={setFilterCity}
        />
        <Content products={products} uniqueProducts={uniqueProducts} />
      </div>
    </ThemeProvider>
  );
};

export default App;
