import React from "react";
import styles from "./Title1.module.scss";
import Label from "../Button/Label";
import SquaresFour from "../../assets/svg/SquaresFour.svg";

interface Title1Props {
  children: React.ReactNode;
  label: string;
  to: string;
}

const Title1 = ({ children, label, to }: Title1Props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title1}>{children}</h1>
      {label && (
        <Label
          toLink={to}
          srcImg={SquaresFour}
          altImg="Quatro quadrados"
          color="#fff"
        >
          {label}
        </Label>
      )}
    </div>
  );
};

export default Title1;
