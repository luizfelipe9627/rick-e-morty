import { Link } from "react-router-dom";
import styles from "./Label.module.scss";

interface LabelProps {
  toLink?: string;
  altImg?: string;
  srcImg?: string;
  pText: string;

  fontSize?: string;
  fontWeight?: string;
  color?: string;
  backgroundColor?: string;
}

const Label = ({ toLink, srcImg, altImg, pText, ...props }: LabelProps) => {
  return toLink ? (
    <Link
      to={`/${toLink}`}
      className={styles.label}
      style={{ backgroundColor: `${props.backgroundColor}` }}
    >
      {srcImg && altImg && <img src={srcImg} alt={altImg} />}
      <p style={{ ...props }}>{pText}</p>
    </Link>
  ) : (
    <button
      className={styles.label}
      style={{ backgroundColor: `${props.backgroundColor}` }}
    >
      {srcImg && altImg && <img src={srcImg} alt={altImg} />}
      <p style={{ ...props }}>{pText}</p>
    </button>
  );
};

export default Label;
