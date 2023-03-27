import { Logo, Menu } from "components";
import { HeaderStyledMenu } from "./HeaderStyled";

interface HeaderProps {
  menuClick: (activeContainer: any) => void;
}

const Header: React.FC<HeaderProps> = ({ menuClick }) => {
  return (
    <HeaderStyledMenu>
      <Logo />
      <Menu menuClick={menuClick} />
    </HeaderStyledMenu>
  );
};

export default Header;
