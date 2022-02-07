import React from "react";
import Header from "./header/header";
import Category from "./categories/category";
import { Alert } from "@mui/material";

const Content = ({ products, uniqueProducts }) => {
  if (products.length == 0) {
    return <Alert severity="error">No Data Found Pls reload the page!</Alert>;
  }
  return (
    <div className="content">
      <Header />
      {uniqueProducts.map((cat, i) => (
        <Category
          key={i}
          items={products.filter((item) => item.product_name == cat)}
        />
      ))}
    </div>
  );
};

export default Content;
