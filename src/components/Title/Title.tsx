import React from "react";
import styles from "./Title.module.scss";
import Label from "../Button/Label";
import SquaresFour from "../../assets/svg/SquaresFour.svg";

interface TitleProps {
  children: React.ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{children}</h1>
      <Label toLink="characters" srcImg={SquaresFour} altImg="Quatro quadrados">Ver todos</Label>
    </div>
  );
};

export default Title;
