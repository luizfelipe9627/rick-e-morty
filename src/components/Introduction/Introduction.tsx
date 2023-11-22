import HighLight from "../../assets/img/HighLightImage.png";
import SunLight from "../../assets/svg/SunLight.svg";
import MoonDark from "../../assets/svg/MoonDark.svg";
import styles from "./Introduction.module.scss";
import Label from "../Button/Label";

const Introduction = () => {
  return (
    <div className={styles.introduction}>
      <div className={styles.content}>
        <p className={styles.title}>
          Saiba tudo em um só <span>lugar.</span>
        </p>
        <p className={styles.subtitle}>
          Personagens, localizações, episódios e muito mais.
        </p>

        <div className={styles.themes}>
          <Label
            srcImg={MoonDark}
            altImg="Lua"
            pText="Escuro"
            fontSize="14px"
            color="var(--secondary-color)"
          />

          <Label
            srcImg={SunLight}
            altImg="Sol"
            pText="Claro"
            fontSize="14px"
            color="var(--light-color)"
            backgroundColor="var(--primary-color)"
          />
        </div>

        <p className={styles.phrase}>
          Wubba Lubba Dub Dub! Cuidado com os olhos.
        </p>
      </div>

      <img src={HighLight} alt="Foto do Rick e do Morty" />
    </div>
  );
};

export default Introduction;
