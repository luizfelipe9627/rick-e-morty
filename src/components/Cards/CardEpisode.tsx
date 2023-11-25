import React from "react";
import styles from "./CardEpisode.module.scss";
import Label from "../Button/Label";
import Heart from "../Svg/Heart";
import Info from "../../assets/svg/Info.svg";
import Play from "../Svg/Play";
import useTheme from "../../hooks/useTheme";
import Information from "../Svg/Info";

interface EpisodeProps {
  id: number;
  name: string;
  air_date: string;
  characters: string[];
  episode: string;
}

const CardEpisode = ({
  id,
  name,
  air_date,
  characters,
  episode,
}: EpisodeProps) => {
  const [theme] = useTheme();
  const [isHeartFilled, setHeartFilled] = React.useState(false);

  const handleClick: React.MouseEventHandler<SVGElement> = () => {
    setHeartFilled(!isHeartFilled);
  };

  return (
    <div className={styles.cardEpisode}>
      <p className={styles.name}>
        {theme === "light" ? (
          <Play size="medium" />
        ) : (
          <Play size="medium" theme="dark" />
        )}
        {name} | {episode}
      </p>

      <span className={styles.saibaMais}>
        <Label
          toLink={`episode/${id}`}
          componentSvg={
            theme === "light" ? <Information /> : <Information theme="dark" />
          }
        >
          Saiba mais
        </Label>
        <Heart size="medium" fill={isHeartFilled} onClick={handleClick} />
      </span>
    </div>
  );
};

export default CardEpisode;
