import { makeStyles } from "@mui/styles";
import { bgcolor, color } from "@mui/system";

export default makeStyles((theme) => ({
  filterCard: {
    "&&": {
      padding: "20px 30px",
      borderRadius: "20px",
    },
  },
  divider: {
    "&&": { marginTop: "10px", marginBottom: "20px" },
  },
  formControl: {
    "&&": { width: 200, marginBottom: "15px" },
  },
  InputLabel: {
    "&&": { backgroundColor: "#1e1e1e" },
  },
}));
