import React from "react";
import Search from "../Search/Search";
import styles from "./Character.module.scss";

const Character = () => {
  return (
    <section className={styles.character}>
      <Search />
    </section>
  );
};

export default Character;
