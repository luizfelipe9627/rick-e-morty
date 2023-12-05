import React from "react";
import styles from "./CardEpisode.module.scss";
import Label from "../Button/Label";
import Heart from "../Svg/Heart";
import Play from "../Svg/Play";
import Info from "../Svg/Info";

interface CardEpisodeProps {
  id: number;
  name: string;
  episode: string;
}

const CardEpisode = ({ id, name, episode }: CardEpisodeProps) => {
  const [isHeartFilled, setHeartFilled] = React.useState(false);

  const handleClick: React.MouseEventHandler<SVGElement> = () => {
    setHeartFilled(!isHeartFilled);
  };

  return (
    <div className={styles.cardEpisode}>
      <div className={styles.name}>
        <Play size="medium" />
        <p>
          {name} | {episode}
        </p>
      </div>

      <span className={styles.saibaMais}>
        <Label toLink={`episodes/${id}`} componentSvg={<Info />}>
          Saiba mais
        </Label>
        <Heart size="medium" fill={isHeartFilled} onClick={handleClick} />
      </span>
    </div>
  );
};

export default CardEpisode;
