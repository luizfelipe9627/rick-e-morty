import { Link } from "react-router-dom";
import styles from "./Label.module.scss";
import React from "react";

interface LabelProps {
  toLink?: string;
  altImg?: string;
  srcImg?: string;
  componentSvg?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLElement>;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  backgroundColor?: string;
  padding?: string;
  margin?: string;
  active?: boolean;
  className?: string;
}

const Label = ({
  toLink,
  srcImg,
  altImg,
  children,
  onClick,
  fontSize,
  fontWeight,
  color,
  backgroundColor,
  active,
  componentSvg,
  className,
  ...props
}: LabelProps) => {
  const CustomComponent = toLink ? Link : "button";

  const labelStyle: React.CSSProperties = {
    backgroundColor,
    ...props,
  };

  const paragraphStyle: React.CSSProperties = {
    fontSize,
    fontWeight,
    color,
  };

  return (
    <CustomComponent
      to={toLink ? `/${toLink}` : ""}
      className={`${styles.label} ${className ? className : ""} ${
        active ? "active" : ""
      }`}
      style={labelStyle}
      onClick={onClick}
    >
      {srcImg && altImg && <img src={srcImg} alt={altImg} />}
      {componentSvg && componentSvg}
      <p style={paragraphStyle}>{children}</p>
    </CustomComponent>
  );
};

export default Label;
