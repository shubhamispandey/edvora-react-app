import React from "react";

import { Typography, Divider, Card } from "@mui/material";

import Carousel from "react-elastic-carousel";
import CarouselItem from "./carouselItem";
import useStyle from "./style";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 500, itemsToShow: 2 },
  { width: 850, itemsToShow: 3 },
];

const Category = ({ items }) => {
  const classes = useStyle();

  return (
    <div className="category">
      <Typography
        variant="h6"
        sx={{ fontWeight: "regular", marginLeft: "10px" }}
      >
        {items[0].product_name}
      </Typography>
      <Divider variant="" className={classes.divider} />
      <div className={classes.carouselWrapper}>
        <Carousel
          className={classes.carousel}
          breakPoints={breakPoints}
          pagination={false}
        >
          {items.map((item, i) => (
            <Card
              key={i}
              sx={{
                borderRadius: "5px",
                width: "100%",
                margin: "15px",
                backgroundColor: "#202020",
              }}
            >
              <CarouselItem>
                <div className={classes.card__top}>
                  <div className={classes.card__img}>
                    <img
                      className={classes.card__img_child}
                      src={item.image}
                      alt="img"
                    />
                  </div>
                  <div className={classes.card__desc}>
                    <Typography variant="h6" sx={{ fontWeight: "500" }}>
                      {item.product_name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: "light", color: "#d8d8d8" }}
                    >
                      {item.brand_name}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: "500" }}>
                      $ {item.price}
                    </Typography>
                  </div>
                </div>
                <div className={classes.card__bottom}>
                  <div className={classes.card__bottom__cont}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: "light",
                        color: "#d8d8d8",
                      }}
                    >
                      {item.address.city}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: "light",
                        minWidth: "135px",
                        color: "#d8d8d8",
                      }}
                    >
                      Date: {item.time.split("T")[0]}
                    </Typography>
                  </div>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: "light",
                      color: "#d8d8d8",
                      marginTop: "-5px",
                    }}
                  >
                    {item.address.state}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: "light",
                      color: "#d8d8d8",
                    }}
                  >
                    {item.discription}
                  </Typography>
                </div>
              </CarouselItem>
            </Card>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Category;
