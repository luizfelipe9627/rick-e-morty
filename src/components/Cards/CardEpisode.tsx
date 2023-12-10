import styles from "./CardEpisode.module.scss";
import Label from "../Label/Label";
import Heart from "../Svg/Heart";
import Play from "../Svg/Play";
import Info from "../Svg/Info";
import useFavorite from "../../hooks/useFavorite";
import useViewed from "../../hooks/useViewed";

interface CardEpisodeProps {
  id: number;
  name: string;
  episode: string;
}

const CardEpisode = ({ id, name, episode }: CardEpisodeProps) => {
  const { isHeartFilled, toggleFavorite } = useFavorite({
    id: id,
    localStorageName: "favoritesEpisodes",
  });

  const { isCardClicked, handleCardClick } = useViewed({
    id: id,
    localStorageName: "viewedsEpisodes",
  });

  return (
    <div
      className={`${styles.cardEpisode} ${isCardClicked ? styles.clicked : ""}`}
    >
      <div className={styles.name}>
        <Play size="medium" />
        <p>
          {name} | {episode}
        </p>
      </div>

      <span className={styles.saibaMais}>
        <Label
          toLink={`episodes/${id}`}
          componentSvg={<Info />}
          onClick={handleCardClick}
        >
          Saiba mais
        </Label>
        <Heart size="medium" fill={isHeartFilled} onClick={toggleFavorite} />
      </span>
    </div>
  );
};

export default CardEpisode;
