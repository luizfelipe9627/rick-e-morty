import React from "react";
import styles from "./Title.module.scss";
import Label from "../Button/Label";
import SquaresFour from "../../assets/svg/SquaresFour.svg";

interface TitleProps {
  children: React.ReactNode;
  label: string;
  to: string;
}

const Title = ({ children, label, to }: TitleProps) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{children}</h1>
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

export default Title;
