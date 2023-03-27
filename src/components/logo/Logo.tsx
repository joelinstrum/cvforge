// import logoImage from "./logo.png";
import LogoStyled from "./LogoStyled";
import LogoImage from "./LogoImage";

const Logo = () => {
  return (
    <LogoStyled>
      <div>
        <LogoImage />
      </div>
      <div>
        <div>ResumeBuilder</div>
        <div>custom design your resume</div>
      </div>
    </LogoStyled>
  );
};

export default Logo;
