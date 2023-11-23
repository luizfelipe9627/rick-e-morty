import React from "react";
import HomeImgLight from "../../assets/img/HomeImgLight.png";
import HomeImgDark from "../../assets/img/HomeImgDark.png";
import SunLight from "../../assets/svg/SunLight.svg";
import MoonDark from "../../assets/svg/MoonDark.svg";
import MoonLight from "../../assets/svg/MoonLight.svg";
import styles from "./Introduction.module.scss";
import Label from "../Button/Label";

const Introduction = () => {
  // Cria um estado chamado theme e uma função atualizadora chamada setTheme. O valor inicial do estado é o valor do localStorage(caso exista) ou "light"(caso não exista).
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "light",
  );

  const updateTheme = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    const phrase = document.querySelector(
      `.${styles.phrase}`,
    ) as HTMLParagraphElement;
    const buttons = document.querySelectorAll(`.${styles.themes} button`);

    if (newTheme === "dark") {
      phrase.innerText = "Ai sim, Porr#@%&*";
      document.body.classList.add("dark");
      buttons[0].classList.add("active");
      buttons[1].classList.remove("active");
    } else {
      phrase.innerText = "Wubba Lubba Dub Dub! Cuidado com os olhos.";
      document.body.classList.remove("dark");
      buttons[0].classList.remove("active");
      buttons[1].classList.add("active");
    }
  };

  React.useEffect(() => {
    updateTheme(theme);
  }, [theme]);

  return (
    <section className={styles.introduction}>
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
              srcImg={theme === "dark" ? MoonLight : MoonDark}
              altImg="Lua"
              onClick={() => updateTheme("dark")}
            >
              Escuro
            </Label>

            <Label
              srcImg={SunLight}
              altImg="Sol"
              margin="0 0 0 8px"
              onClick={() => updateTheme("light")}
              active
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

export default Introduction;
