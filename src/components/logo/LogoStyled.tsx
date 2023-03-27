import { styled } from "@mui/system";

const LogoStyled = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  "& > div:nth-of-type(2)": {
    "& > div:nth-of-type(1)": {
      fontFamily: "LogoFont",
      color: theme.palette.logo.color,
      fontSize: "36px",
      lineHeight: "36px",
    },
    "& > div:nth-of-type(2)": {
      fontFamily: "helvetica",
      color: "#333",
      fontSize: "12px",
      paddingLeft: "2px",
      marginTop: "-5px",
    },
  },
}));

export default LogoStyled;
