import React from "react";
import useTheme from "../../hooks/useTheme";
import Label from "../Button/Label";
import Planet from "../Svg/Planet";
import Play from "../Svg/Play";
import Smiley from "../Svg/Smiley";
import styles from "./Filter.module.scss";

const Filter = () => {
  const [theme] = useTheme();
  const [active, setActive] = React.useState("characters");

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
    <div className={styles.filter}>
      <Label
        componentSvg={
          theme === "dark" ? (
            <Smiley size="small" theme="dark" />
          ) : (
            <Smiley size="small" />
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
  );
};

export default Filter;
