import Logo from "../../assets/svg/LogoA.svg";
import Heart from "../../assets/svg/Heart.svg";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import Label from "../Button/Label";

const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.wrapper} container`}>
        <Link to="/">
          <img src={Logo} alt="Rick and Morty" />
        </Link>

        <Label toLink="favorites" srcImg={Heart} altImg="Coração">
          Lista de favoritos
        </Label>
      </div>
    </header>
  );
};

export default Header;
