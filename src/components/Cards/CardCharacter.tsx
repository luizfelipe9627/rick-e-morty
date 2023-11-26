import React from "react";
import styles from "./CardCharacter.module.scss";
import Label from "../Button/Label";
import Alien from "../Svg/Alien";
import Planet from "../Svg/Planet";
import Heart from "../Svg/Heart";
import Info from "../Svg/Info";
import Pulse from "../Svg/Pulse";

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
  const [isHeartFilled, setHeartFilled] = React.useState(false);

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
          <Pulse size="small" />
          {status === "Alive" ? "Vivo" : "Morto"}
        </div>

        <div className={styles.species}>
          <Alien size="small" />
          {species === "Human" ? "Humano" : "Alienígena"}
        </div>

        <p className={styles.planet}>
          <Planet size="small" />
          {origin}
        </p>

        <div className={styles.saibaMais}>
          <Label toLink={`characters/${id}`} componentSvg={<Info />}>
            Saiba mais
          </Label>
        </div>
      </div>
    </div>
  );
};

export default CardCharacter;
