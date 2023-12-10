import React from "react";
import styles from "./Title.module.scss";
import Label from "../Label/Label";
import SquaresFour from "../../assets/svg/SquaresFour.svg";

interface TitleProps {
  type: "primary" | "secondary";
  children: React.ReactNode;
  label?: string;
  to?: string;
  componentSvg?: React.ReactNode;
}

const Title = ({ type, children, label, to, componentSvg }: TitleProps) => {
  return type === "primary" ? (
    <div className={styles.titlePrimary}>
      <h1>{children}</h1>
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
  ) : type === "secondary" ? (
    <div className={styles.titleSecondary}>
      {componentSvg}
      <h1>{children}</h1>
    </div>
  ) : null;
};

export default Title;
