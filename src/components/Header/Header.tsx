import Logo from "../../assets/svg/LogoA.svg";
import styles from "./Header.module.scss";
import { Link, useLocation } from "react-router-dom";
import Label from "../Button/Label";
import Heart from "../Svg/Heart";

const Header = () => {
  const location = useLocation();
  const isRootPath = location.pathname === "/";

  return (
    <header
      className={`${styles.header}`}
      style={{
        backgroundColor: isRootPath ? "var(--bg-color)" : "var(--bg-color4)",
      }}
    >
      <div className={`${styles.wrapper} container`}>
        <Link to="/">
          <img src={Logo} alt="Rick and Morty" />
        </Link>

        <Label
          toLink="favorites"
          backgroundColor="var(--blue1-color)"
          color="var(--white-color)"
          componentSvg={<Heart size="small" color="#fff" />}
        >
          Lista de favoritos
        </Label>
      </div>
    </header>
  );
};

export default Header;
