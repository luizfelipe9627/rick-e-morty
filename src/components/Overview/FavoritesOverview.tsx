import styles from "./FavoritesOverview.module.scss";
import Filter from "../Filter/Filter";

const FavoritesOverview = () => {
  return (
    <section className={`${styles.favoritesOverview} container`}>
      <div className={styles.wrapper}>
        <Filter />
      </div>
    </section>
  );
};

export default FavoritesOverview;
