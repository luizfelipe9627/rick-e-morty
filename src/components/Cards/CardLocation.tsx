import React from "react";
import Label from "../Button/Label";
import Info from "../Svg/Info";
import Heart from "../Svg/Heart";
import styles from "./CardLocation.module.scss";
import Location from "../Svg/Location";
import Planet from "../Svg/Planet";
import useFavorite from "../../hooks/useFavorite";

interface LocationProps {
  id: number;
  name?: string;
  type?: string;
}

const CardLocation = ({ id, name, type }: LocationProps) => {
  const { isHeartFilled, toggleFavorite } = useFavorite({
    id: id,
    localStorageName: "favoritesLocations",
  });

  return (
    <div className={styles.cardLocation}>
      <span className={styles.icon}>
        {type !== "Planet" ? <Location size="big" /> : <Planet size="big" />}
      </span>

      <div>
        <h1 className={styles.type}>{type}</h1>
        <p className={styles.name}>{name}</p>
      </div>

      <div className={styles.wrapper}>
        <Label componentSvg={<Info />} toLink={`locations/${id}`}>
          Saiba mais
        </Label>
        <Heart size="medium" fill={isHeartFilled} onClick={toggleFavorite} />
      </div>
    </div>
  );
};

export default CardLocation;
