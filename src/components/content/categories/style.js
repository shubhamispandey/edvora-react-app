import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  divider: {
    "&&": { marginTop: "10px", marginBottom: "15px" },
  },
  card__top: {
    display: "flex",
    alignItems: "stretch",
  },
  card__img: {
    width: "90px",
    height: "90px",
    borderRadius: "10px",
    overflow: "hidden",
    "@media (min-width: 1450px)": {
      width: "70px",
      height: "70px",
    },
  },
  card__img_child: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  card__desc: {
    marginLeft: "20px",
    "@media (min-width: 1450px)": {
      marginLeft: "10px",
    },
  },
  card__bottom__cont: {
    display: "flex",
    justifyContent: "space-between",
  },
  carouselWrapper: { position: "relative", paddingBottom: "30px" },
  carousel: {
    /* backgroundColor: "#121212",
    borderRadius: "20px",
    marginBottom: "25px", */
  },
}));
