import styles from "./CardCharacter.module.scss";
import Label from "../Button/Label";
import Alien from "../Svg/Alien";
import Planet from "../Svg/Planet";
import Heart from "../Svg/Heart";
import Info from "../Svg/Info";
import Pulse from "../Svg/Pulse";
import "react-loading-skeleton/dist/skeleton.css";
import useFavorite from "../../hooks/useFavorite";
import useViewed from "../../hooks/useViewed";

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
  const { isHeartFilled, toggleFavorite } = useFavorite({
    id: id,
    localStorageName: "favoritesCharacters",
  });

  const { isCardClicked, handleCardClick } = useViewed({
    id: id,
    localStorageName: "viewedsCharacters",
  });

  return (
    <div
      className={`${styles.cardCharacter} ${
        isCardClicked ? styles.clicked : ""
      }`}
      key={id}
    >
      <div className={styles.photo}>
        <img src={image} alt={name} />
      </div>

      <div className={styles.infos}>
        <div className={styles.wrapper}>
          <h1 className={styles.name}>{name}</h1>
          <Heart size="big" fill={isHeartFilled} onClick={toggleFavorite} />
        </div>

        <div className={styles.identity}>
          <div className={styles.alive}>
            <Pulse size="small" />
            <p>{status === "Alive" ? "Vivo" : "Morto"}</p>
          </div>

          <div className={styles.species}>
            <Alien size="small" />
            <p>{species === "Human" ? "Humano" : "Alienígena"}</p>
          </div>

          <div className={styles.planet}>
            <Planet size="small" />
            <p>{origin}</p>
          </div>
        </div>

        <span className={styles.saibaMais}>
          <Label
            toLink={`characters/${id}`}
            componentSvg={<Info />}
            onClick={handleCardClick}
          >
            Saiba mais
          </Label>
        </span>
      </div>
    </div>
  );
};

export default CardCharacter;
