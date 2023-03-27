import { styled } from "@mui/system";

const HeaderStyled = styled("div")(() => ({
  display: "flex",
}));

const HeaderStyledMenu = styled("div")(() => ({
  marginTop: "25px!important",
  marginBottom: "25px!important",
  display: "flex",
  width: "1000px",
  margin: "0 auto",
  "& > div:nth-of-type(1)": {
    width: "25%",
  },
  "& > div:nth-of-type(2)": {
    width: "75%",
  },
}));

export { HeaderStyled, HeaderStyledMenu };
