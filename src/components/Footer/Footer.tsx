import styles from "./Footer.module.scss";
import LogoFooter from "../../assets/svg/LogoFooter.svg";
import ArrowY from "../Svg/ArrowY";
import PaintingBoard from "../../assets/svg/PaintingBoard.svg";
import Code from "../../assets/svg/Code.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const clearFavorites = () => {
    localStorage.removeItem("favoritesCharacters");
    localStorage.removeItem("favoritesEpisodes");
    localStorage.removeItem("favoritesLocations");
    window.location.reload();
  };

  const clearViewed = () => {
    localStorage.removeItem("viewedsCharacters");
    localStorage.removeItem("viewedsEpisodes");
    localStorage.removeItem("viewedsLocations");
    window.location.reload();
  };

  return (
    <footer className={styles.footer}>
      <div className={`${styles.wrapper} container`}>
        <div className={styles.top}>
          <div className={styles.logo}>
            <Link to="/">
              <img src={LogoFooter} alt="Logo Rick e Morty" />
            </Link>
          </div>

          <div className={styles.backTop}>
            <p onClick={handleClick}>Voltar ao topo</p>

            <button onClick={handleClick}>
              <ArrowY size="big" />
            </button>
          </div>
        </div>

        <div className={styles.clearData}>
          <div className={styles.title}>
            <h1>Reset de dados:</h1>
          </div>

          <div className={styles.options}>
            <p onClick={clearFavorites}>Limpar favoritados</p>
            <p onClick={clearViewed}>Limpar visualizados</p>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.year}>©2023</p>

          <div className={styles.createdBy}>
            <div className={styles.creator}>
              <img src={Code} alt="Código" />
              <p className={styles.paragraph}>
                Desenvolvido por{" "}
                <a
                  href="https://www.linkedin.com/in/luizfelipe9627"
                  target="_blank"
                >
                  Luiz Felipe Silva
                </a>
              </p>
            </div>

            <div className={styles.creator}>
              <img src={PaintingBoard} alt="Tábua de pintura" />
              <p className={styles.paragraph}>
                Layout criado por{" "}
                <a href="https://www.figma.com/@hsousadev" target="_blank">
                  Henrique Souza
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
