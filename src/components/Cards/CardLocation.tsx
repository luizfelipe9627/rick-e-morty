import React from "react";
import Label from "../Button/Label";
import Info from "../Svg/Info";
import Heart from "../Svg/Heart";
import styles from "./CardLocation.module.scss";
import Location from "../Svg/Location";
import Planet from "../Svg/Planet";

interface LocationProps {
  id?: number;
  name?: string;
  type: string;
}

const CardLocation = ({ id, name, type }: LocationProps) => {
  const [isHeartFilled, setHeartFilled] = React.useState(false);

  const handleClick: React.MouseEventHandler<SVGElement> = () => {
    setHeartFilled(!isHeartFilled);
  };

  return (
    <div
      className={styles.cardLocation}
    >
      <span className={styles.icon}>
        {type === "Planet" ? <Planet size="big" /> : <Location size="big" />}
      </span>

      <h1 className={styles.type}>{type}</h1>
      <p className={styles.name}>{name}</p>

      <div className={styles.wrapper}>
        <Label componentSvg={<Info />} toLink={`location/${id}`}>
          Saiba mais
        </Label>
        <Heart size="medium" fill={isHeartFilled} onClick={handleClick} />
      </div>
    </div>
  );
};

export default CardLocation;
