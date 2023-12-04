import React from "react";
import HomeImgLight from "../../assets/img/HomeImgLight.png";
import HomeImgDark from "../../assets/img/HomeImgDark.png";
import styles from "./HomeIntroduction.module.scss";
import Label from "../Button/Label";
import useTheme from "../../hooks/useTheme";
import Moon from "../Svg/Moon";
import Sun from "../Svg/Sun";

const HomeIntroduction = () => {
  // Cria um estado chamado theme e uma função atualizadora chamada setTheme. O valor inicial do estado é o valor do localStorage(caso exista) ou "light"(caso não exista).
  const [theme, updateTheme] = useTheme();

  const handleThemeChange = (newTheme: string) => {
    updateTheme(newTheme);
  };

  React.useEffect(() => {
    const buttonsTheme = document.querySelectorAll(
      `.${styles.themes} button`,
    ) as NodeListOf<HTMLButtonElement>;
    const isDarkTheme = theme === "dark";

    document.body.classList.toggle("dark", isDarkTheme);
    buttonsTheme[0]?.classList.toggle("active", isDarkTheme);
    buttonsTheme[1]?.classList.toggle("active", !isDarkTheme);
  }, [theme]);

  return (
    <section className={styles.homeIntroduction}>
      <div className={`${styles.wrapper} container`}>
        <div className={`${styles.content} `}>
          <p className={styles.title}>
            Saiba tudo em um só <span>lugar.</span>
          </p>
          <p className={styles.subtitle}>
            Personagens, localizações, episódios e muito mais.
          </p>

          <div className={styles.themes}>
            <Label
              componentSvg={<Moon size="medium" />}
              onClick={() => handleThemeChange("dark")}
              className="buttonDark"
            >
              Escuro
            </Label>

            <Label
              componentSvg={<Sun size="medium" />}
              onClick={() => handleThemeChange("light")}
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

        <img
          src={theme === "dark" ? HomeImgDark : HomeImgLight}
          alt="Foto do Rick e do Morty"
          className={styles.img}
        />
      </div>
    </section>
  );
};

export default HomeIntroduction;
