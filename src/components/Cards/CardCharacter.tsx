import React, { useState } from "react";
import styles from "./CardCharacter.module.scss";
import Label from "../Button/Label";
import Pulse from "../../assets/svg/Pulse.svg";
import Alien from "../Svg/Alien";
import Planet from "../Svg/Planet";
import Info from "../../assets/svg/Info.svg";
import Heart from "../Svg/Heart";

interface CardCharacterProps {
  id: number;
  name: string;
  status: string;
  origin: string;
  image: string;
  species: string;
}

const CardCharacter = ({
  id,
  image,
  name,
  status,
  species,
  origin,
}: CardCharacterProps) => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "light",
  );
  const [isHeartFilled, setHeartFilled] = useState(false);

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

  const handleClick: React.MouseEventHandler<SVGElement> = () => {
    setHeartFilled(!isHeartFilled);
  };

  return (
    <div className={styles.cardCharacter} key={id}>
      <div className={styles.photo}>
        <img src={image} alt={name} />
      </div>

      <div className={styles.infos}>
        <div className={styles.wrapper}>
          <h1 className={styles.name}>{name}</h1>

          <span className={styles.favorite}>
            <Heart size="big" fill={isHeartFilled} onClick={handleClick} />
          </span>
        </div>

        <div className={styles.alive}>
          <img src={Pulse} alt="Batidas coração" />
          {status === "Alive" ? "Vivo" : "Morto"}
        </div>

        <div className={styles.species}>
          {theme === "light" ? <Alien /> : <Alien theme="dark" />}
          {species === "Human" ? "Humano" : "Alienígena"}
        </div>

        <p className={styles.planet}>
          {theme === "light" ? (
            <Planet size="small" />
          ) : (
            <Planet theme="dark" size="small" />
          )}
          {origin}
        </p>

        <div className={styles.saibaMais}>
          <Label toLink={`characters/${id}`} srcImg={Info} altImg="Informação">
            Saiba mais
          </Label>
        </div>
      </div>
    </div>
  );
};

export default CardCharacter;
