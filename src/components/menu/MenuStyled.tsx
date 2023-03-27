import { styled } from "@mui/system";

const MenuStyled = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  "& > div": {
    marginLeft: "20px",
    display: "flex",
    cursor: "pointer",
    ".MuiIcon-root": {
      marginRight: "3px",
      color: theme.palette.icon.color,
    },
    "&:hover": {
      ".MuiIcon-root": {
        color: theme.palette.icon.hover,
      },
    },
  },
}));

export default MenuStyled;
