import React from "react";
import Search from "../Search/Search";
import styles from "./Character.module.scss";
import Title from "../Title/Title";
import CardCharacter from "../Cards/CardCharacter";

const Character = () => {
  return (
    <section className={`${styles.character} container`}>
      <Search />
      <Title>Personagens</Title>
      <CardCharacter/>
    </section>
  );
};

export default Character;
