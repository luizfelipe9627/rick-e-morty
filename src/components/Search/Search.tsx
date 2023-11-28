import React from "react";
import Label from "../Button/Label";
import styles from "./Search.module.scss";
import Smiley from "../Svg/Smiley";
import Planet from "../Svg/Planet";
import Play from "../Svg/Play";
import MagnifyingGlass from "../Svg/MagnifyingGlass";

const Search = () => {
  const [active, setActive] = React.useState("characters");
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "light",
  );

  const updateTheme = (newTheme: string) => {
    setTheme(newTheme);
  };

  const handleThemeClick = (newTheme: string) => {
    updateTheme(newTheme);
  };

  React.useEffect(() => {
    const buttonDark = document.querySelector(
      ".buttonDark",
    ) as HTMLButtonElement;
    const buttonLight = document.querySelector(
      ".buttonLight",
    ) as HTMLButtonElement;

    buttonDark?.addEventListener("click", () => handleThemeClick("dark"));
    buttonLight?.addEventListener("click", () => handleThemeClick("light"));

    return () => {
      buttonDark?.removeEventListener("click", () => handleThemeClick("dark"));
      buttonLight?.removeEventListener("click", () =>
        handleThemeClick("light"),
      );
    };
  }, [theme]);

  const handleClick: React.MouseEventHandler = (event) => {
    const buttons = document.querySelectorAll(`.${styles.filter} button`);
    const element = event.currentTarget as HTMLButtonElement;

    buttons.forEach((button) => {
      button.classList.remove("active");
    });

    element.classList.add("active");
    const buttonText = element.innerText;
    console.log(active);

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
          <MagnifyingGlass size="medium" />
        </button>
      </form>

      <div className={styles.filter}>
        <p>Filtrar por:</p>

        <div className={styles.buttons}>
          <Label
            componentSvg={
              theme === "dark" ? (
                <Smiley size="medium" theme="dark" />
              ) : (
                <Smiley size="medium" />
              )
            }
            altImg="Carinha"
            onClick={handleClick}
            active
          >
            Personagens
          </Label>
          <Label
            componentSvg={<Planet size="medium" />}
            altImg="Planeta"
            onClick={handleClick}
          >
            Localizações
          </Label>
          <Label
            componentSvg={<Play size="medium" />}
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
