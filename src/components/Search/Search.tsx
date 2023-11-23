import React, { MouseEventHandler } from "react";
import Label from "../Button/Label";
import styles from "./Search.module.scss";
import SmileyDark from "../../assets/svg/SmileyDark.svg";
import SmileyLight from "../../assets/svg/SmileyLight.svg";
import PlayLight from "../../assets/svg/Play.svg";
import PlanetLight from "../../assets/svg/Planet.svg";
import MagnifyinGlassLight from "../../assets/svg/MagnifyingGlassLight.svg";
import MagnifyinGlassDark from "../../assets/svg/MagnifyingGlassDark.svg";

const Search = () => {
  const [active, setActive] = React.useState("");
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "light",
  );

  const handleClick: MouseEventHandler = (event) => {
    const buttons = document.querySelectorAll(`.${styles.filter} button`);
    const element = event.currentTarget as HTMLButtonElement;

    buttons.forEach((button) => {
      if (button.classList.contains("active")) {
        button.classList.remove("active");
      }
      element.classList.add("active");

      if (element.innerText === "Personagens") {
        setActive("characters");
      }
      if (element.innerText === "Localizações") {
        setActive("locations");
      }
      if (element.innerText === "Episódios") {
        setActive("episodes");
      }
    });

    console.log(active);
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
        <p>Filtrar por:</p>
        <Label
          srcImg={
            theme === "dark"
              ? active === "characters"
                ? SmileyLight
                : SmileyDark
              : theme === "light"
              ? active === "characters"
                ? SmileyLight
                : SmileyLight
              : SmileyDark
          }
          altImg="Carinha"
          active
          onClick={handleClick}
        >
          Personagens
        </Label>
        <Label
          srcImg={
            theme === "dark"
              ? active === "locations"
                ? SmileyDark
                : SmileyLight
              : active === "locations"
              ? SmileyLight
              : SmileyDark
          }
          altImg="Planeta"
          onClick={handleClick}
        >
          Localizações
        </Label>
        <Label
          srcImg={
            theme === "dark"
              ? active === "episodes"
                ? SmileyDark
                : SmileyLight
              : active === "episodes"
              ? SmileyLight
              : SmileyDark
          }
          altImg="Play"
          active={active === "episodes"}
          onClick={handleClick}
        >
          Episódios
        </Label>
      </div>
    </div>
  );
};

export default Search;
