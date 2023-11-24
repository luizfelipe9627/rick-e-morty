import React, { MouseEventHandler } from "react";
import Label from "../Button/Label";
import styles from "./Search.module.scss";
import PlayLight from "../../assets/svg/PlayLight.svg";
import PlayDark from "../../assets/svg/PlayDark.svg";
import MagnifyinGlassLight from "../../assets/svg/MagnifyingGlassLight.svg";
import MagnifyinGlassDark from "../../assets/svg/MagnifyingGlassDark.svg";
import Smiley from "../Svg/Smiley";
import Planet from "../Svg/Planet";

const Search = () => {
  const [active, setActive] = React.useState("characters");
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "light",
  );

  const updateTheme = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    const buttonDark = document.querySelector(
      ".buttonDark",
    ) as HTMLButtonElement;
    const buttonLight = document.querySelector(
      ".buttonLight",
    ) as HTMLButtonElement;

    buttonDark?.addEventListener("click", () => {
      setTheme("dark");
    });

    buttonLight?.addEventListener("click", () => {
      setTheme("light");
    });
  };

  React.useEffect(() => {
    updateTheme(theme);
  }, [theme]);

  const handleClick: MouseEventHandler = (event) => {
    const buttons = document.querySelectorAll(`.${styles.filter} button`);
    const element = event.currentTarget as HTMLButtonElement;

    buttons.forEach((button) => {
      button.classList.remove("active");
    });

    element.classList.add("active");

    const buttonText = element.innerText;

    if (buttonText === "Personagens") {
      setActive("characters");
    } else if (buttonText === "Localizações") {
      setActive("locations");
    } else if (buttonText === "Episódios") {
      setActive("episodes");
    }
  };

  return (
    <div className={`${styles.search} container`}>
      <form className={styles.input}>
        <input
          type="text"
          placeholder="Personagem, episódio, localização..."
          required
        />
        <button>
          <img
            src={theme === "dark" ? MagnifyinGlassLight : MagnifyinGlassDark}
            alt="Lupa de pesquisa"
          />
        </button>
      </form>

      <div className={styles.filter}>
        <p style={{ color: `${theme === "dark" ? "#E4F4F4" : "#313234"}` }}>
          Filtrar por:
        </p>

        <div className={styles.buttons}>
          <Label
            componentSvg={
              theme === "dark" ? (
                <Smiley theme="dark" />
              ) : (
                <Smiley
                  color={active === "characters" ? "#FFFFFF" : "#313234"}
                />
              )
            }
            altImg="Carinha"
            onClick={handleClick}
            active
          >
            Personagens
          </Label>
          <Label
            componentSvg={
              theme === "dark" ? (
                <Planet theme="dark" size="medium" />
              ) : (
                <Planet
                  size="medium"
                  color={active === "locations" ? "#FFFFFF" : "#313234"}
                />
              )
            }
            altImg="Planeta"
            onClick={handleClick}
          >
            Localizações
          </Label>
          <Label
            srcImg={
              theme === "dark" || active == "episodes" ? PlayLight : PlayDark
            }
            altImg="Play"
            onClick={handleClick}
          >
            Episódios
          </Label>
        </div>
      </div>
    </div>
  );
};

export default Search;
