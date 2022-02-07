import React from "react";
import { Typography } from "@mui/material";

const Header = () => {
  return (
    <>
      <Typography
        variant="h3"
        sx={{ fontWeight: "bold", marginBottom: "20px", marginLeft: "10px" }}
      >
        Edvora
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "regular",
          marginBottom: "10px",
          color: "#c2c2c2",
          marginLeft: "10px",
        }}
      >
        Products
      </Typography>
    </>
  );
};

export default Header;
