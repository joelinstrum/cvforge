import MenuStyled from "./MenuStyled";
import { Typography } from "@mui/material";
import Icon from "@mui/material/Icon";

interface MenuProps {
  menuClick: (activeContainer: any) => void;
}

const Menu: React.FC<MenuProps> = ({ menuClick }) => {
  return (
    <MenuStyled>
      <div onClick={() => menuClick("resume_import")}>
        <Icon>file_upload</Icon>
        <Typography>Import Resume</Typography>
      </div>
      <div>
        <Icon>collections</Icon>
        <Typography>View Resume Templates</Typography>
      </div>
      <div>
        <Icon>color_lens</Icon>
        <Typography>Palette</Typography>
      </div>
      <div onClick={() => menuClick("about")}>
        <Icon>perm_data_setting</Icon>
        <Typography>Edit Resume Data</Typography>
      </div>
    </MenuStyled>
  );
};

export default Menu;
