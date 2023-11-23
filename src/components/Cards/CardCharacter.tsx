import React from "react";
import styles from "./CardCharacter.module.scss";
import Label from "../Button/Label";

const CardCharacter = () => {
  return (
    <div className={styles.cardCharacter}>
      <div className={styles.img}>
        <img src="" alt="" />
      </div>

      <div className={styles.infos}>
        <h1 className={styles.name}></h1>
        <p className={styles.alive}></p>
        <p className={styles.species}></p>
        <p className={styles.planet}></p>

        <Label>Saiba mais</Label>
      </div>

      <div className={styles.favorite}>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default CardCharacter;
