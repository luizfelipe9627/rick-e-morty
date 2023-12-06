import styles from "./FavoritesOverview.module.scss";
import FavoriteCharacters from "../Favorite/FavoriteCharacters";
import FavoriteEpisodes from "../Favorite/FavoriteEpisodes";
import FavoriteLocations from "../Favorite/FavoriteLocations";
import useFilter from "../../hooks/useFilter";

const FavoritesOverview = () => {
  const { activeFilter, Filter } = useFilter();
  
  return (
    <section className={`${styles.favoritesOverview} container`}>
      <Filter />

      {activeFilter === "" && (
        <>
          <FavoriteCharacters />
          <FavoriteEpisodes />
          <FavoriteLocations />
        </>
      )}
      {activeFilter === "characters" && <FavoriteCharacters />}
      {activeFilter === "locations" && <FavoriteLocations />}
      {activeFilter === "episodes" && <FavoriteEpisodes />}
    </section>
  );
};

export default FavoritesOverview;
