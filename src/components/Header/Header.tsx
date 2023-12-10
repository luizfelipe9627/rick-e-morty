import Logo from "../../assets/svg/LogoHeader.svg";
import styles from "./Header.module.scss";
import { Link, useLocation } from "react-router-dom";
import Label from "../Label/Label";
import Heart from "../Svg/Heart";

const Header = () => {
  const location = useLocation();
  const isRootPath = location.pathname === "/";

  return (
    <header
      className={`${styles.header}`}
      style={{
        backgroundColor: isRootPath ? "var(--color3)" : "var(--color17)",
      }}
    >
      <div className={`${styles.wrapper} container`}>
        <Link to="/">
          <img src={Logo} alt="Rick and Morty" />
        </Link>

        <Label
          toLink="favorites"
          backgroundColor="var(--color8)"
          color="#ffffff"
          componentSvg={<Heart size="small" color="#fff" />}
        >
          Lista de favoritos
        </Label>
      </div>
    </header>
  );
};

export default Header;
