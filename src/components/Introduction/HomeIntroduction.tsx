import React from "react";
import HomeImgLight from "../../assets/img/HomeImgLight.png";
import HomeImgDark from "../../assets/img/HomeImgDark.png";
import styles from "./HomeIntroduction.module.scss";
import Label from "../Label/Label";
import { useTheme } from "../../context/ThemeContext";
import Moon from "../Svg/Moon";
import Sun from "../Svg/Sun";

const HomeIntroduction = () => {
  const { theme, updateTheme } = useTheme();

  React.useEffect(() => {
    const buttonsTheme = document.querySelectorAll(
      `.${styles.themes} button`,
    ) as NodeListOf<HTMLButtonElement>;
    const isDarkTheme = theme === "dark";

    document.body.classList.toggle("dark", isDarkTheme);
    buttonsTheme[0]?.classList.toggle("active", isDarkTheme);
    buttonsTheme[1]?.classList.toggle("active", !isDarkTheme);

    const imgDark = document.querySelector(
      `.${styles.homeImgDark}`,
    ) as HTMLImageElement;
    const imgLight = document.querySelector(
      `.${styles.homeImgLight}`,
    ) as HTMLImageElement;

    if (theme === "dark") {
      imgDark.classList.add(styles.active);
      imgLight.classList.remove(styles.active);
    } else {
      imgLight.classList.add(styles.active);
      imgDark.classList.remove(styles.active);
    }
  }, [theme]);

  return (
    <section className={styles.homeIntroduction}>
      <div className={`${styles.wrapper} container`}>
        <div className={styles.content}>
          <p className={styles.title}>
            Saiba tudo em um só <span>lugar.</span>
          </p>
          <p className={styles.subtitle}>
            Personagens, localizações, episódios e muito mais.
          </p>

          <div className={styles.themes}>
            <Label
              componentSvg={<Moon size="medium" />}
              onClick={() => updateTheme("dark")}
              className="buttonDark"
            >
              Escuro
            </Label>

            <Label
              componentSvg={<Sun size="medium" />}
              onClick={() => updateTheme("light")}
              className="buttonLight"
            >
              Claro
            </Label>
          </div>

          <p className={styles.phrase}>
            {theme === "dark"
              ? "Ai sim, Porr#@%&*"
              : "Wubba Lubba Dub Dub! Cuidado com os olhos."}
          </p>
        </div>

        <div className={styles.img}>
          <img
            src={HomeImgLight}
            alt="Foto do Rick e do Morty"
            className={`animeOpacity ${styles.homeImgLight}`}
          />
          <img
            src={HomeImgDark}
            alt="Foto do Rick e do Morty"
            className={`animeOpacity ${styles.homeImgDark}`}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeIntroduction;
