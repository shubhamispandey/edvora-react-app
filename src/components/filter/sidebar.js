import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Card,
  Typography,
  Divider,
} from "@mui/material";

import useStyles from "./style";

const Sidebar = ({
  products,
  uniqueProducts,
  setUniqueProducts,
  filterProduct,
  setFilterProduct,
  filterState,
  setFilterState,
  filterCity,
  setFilterCity,
}) => {
  const classes = useStyles();
  const setProductsFilter = (e) => {
    setFilterProduct(e.target.value);
    setUniqueProducts([e.target.value]);
  };

  return (
    <div className="sidebar">
      <Card className={classes.filterCard}>
        <Typography variant="h5">Filter</Typography>
        <Divider variant="" className={classes.divider} />
        <FormControl className={classes.formControl}>
          <InputLabel> Products</InputLabel>
          <Select
            id="product"
            value={filterProduct}
            onChange={(e) => setProductsFilter(e)}
            sx={{ backgroundColor: "#2a2a2a" }}
          >
            {[...new Set(products.map((product) => product.product_name))]
              .sort()
              .map((product, i) => (
                <MenuItem
                  key={i}
                  value={product}
                  sx={{ backgroundColor: "#2a2a2a" }}
                >
                  {product}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel>State</InputLabel>
          <Select
            id="state"
            value={filterState}
            onChange={(e) => setFilterState(e.target.value)}
            sx={{ backgroundColor: "#2a2a2a" }}
          >
            {filterProduct
              ? [
                  ...new Set(
                    products
                      .filter((items) => items.product_name === filterProduct)
                      .map((product) => product.address.state)
                  ),
                ]
                  .sort()
                  .map((state, i) => (
                    <MenuItem
                      key={i}
                      value={state}
                      sx={{ backgroundColor: "#2a2a2a" }}
                    >
                      {state}
                    </MenuItem>
                  ))
              : [...new Set(products.map((product) => product.address.state))]
                  .sort()
                  .map((state, i) => (
                    <MenuItem
                      key={i}
                      value={state}
                      sx={{ backgroundColor: "#2a2a2a" }}
                    >
                      {state}
                    </MenuItem>
                  ))}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel>city</InputLabel>
          <Select
            id="city"
            value={filterCity}
            onChange={(e) => setFilterCity(e.target.value)}
            sx={{ backgroundColor: "#2a2a2a" }}
          >
            {filterState
              ? [
                  ...new Set(
                    products
                      .filter((items) => items.product_name === filterProduct)
                      .map((product) => product.address.city)
                  ),
                ]
                  .sort()
                  .map((city, i) => (
                    <MenuItem
                      key={i}
                      value={city}
                      sx={{ backgroundColor: "#2a2a2a" }}
                    >
                      {city}
                    </MenuItem>
                  ))
              : [...new Set(products.map((product) => product.address.city))]
                  .sort()
                  .map((city, i) => (
                    <MenuItem
                      key={i}
                      value={city}
                      sx={{ backgroundColor: "#2a2a2a" }}
                    >
                      {city} Hi
                    </MenuItem>
                  ))}
          </Select>
        </FormControl>
      </Card>
    </div>
  );
};

export default Sidebar;
