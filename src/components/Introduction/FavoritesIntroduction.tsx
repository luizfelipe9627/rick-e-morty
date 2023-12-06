import Heart from "../Svg/Heart";
import styles from "./FavoritesIntroduction.module.scss";
import FavoriteImg from "../../assets/img/FavoriteImg.png";

const FavoritesIntroduction = () => {
  return (
    <section className={styles.favoritesIntroduction}>
      <div className={`${styles.wrapper} container`}>
        <div className={styles.info}>
          <Heart size="huge" />
          <h1>
            Todos os seus <span>favoritos.</span>
          </h1>
        </div>

        <div className={styles.img}>
          <img src={FavoriteImg} alt="Rick e Morty" />
        </div>
      </div>
    </section>
  );
};

export default FavoritesIntroduction;
