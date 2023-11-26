import React from "react";
import styles from "./Title2.module.scss";
import Label from "../Button/Label";
import SquaresFour from "../../assets/svg/SquaresFour.svg";

interface Title2Props {
  children: React.ReactNode;
  label: string;
  to: string;
}

const Title2 = ({ children, label, to }: Title2Props) => {
  return (
    <div className={styles.container}>
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
      <h1 className={styles.title2}>{children}</h1>
    </div>
  );
};

export default Title2;
