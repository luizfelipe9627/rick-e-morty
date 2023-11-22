import Logo from "../../assets/svg/LogoA.svg";
import Heart from "../../assets/svg/Heart.svg";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={`${styles.header} container`}>
      <Link to="/">
        <img src={Logo} alt="Rick and Morty"/>
      </Link>

      <Link to="/favorites" className={styles.favorites}>
        <img src={Heart} alt="Coração" />
        <p>Lista de favoritos</p>
      </Link>
    </header>
  );
};

export default Header;
