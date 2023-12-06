import styles from "./Favorite.module.scss";
import Title from "../Title/Title";
import useFetch from "../../hooks/useFetch";
import useFavorite from "../../hooks/useFavorite";
import SkeletonCardEpisode from "../Skeleton/SkeletonCardEpisode";
import CardLocation from "../Cards/CardLocation";

const FavoriteLocations = () => {
  const { convertFavorites } = useFavorite({
    id: 0,
    localStorageName: "favoritesLocations",
  });

  const locations = useFetch<LocationProps[]>(
    `https://rickandmortyapi.com/api/location/${convertFavorites().toString()}`,
  );

  const location = useFetch<LocationProps>(
    `https://rickandmortyapi.com/api/location/${convertFavorites().toString()}`,
  );

  return (
    <div className={styles.favorite}>
      <Title type="primary" label="Ver todos" to="locations/1">
        Localizações
      </Title>

      <div className={`${styles.cards} ${styles.locations}`}>
        {locations.loading ? (
          Array.from({ length: 5 }).map((_, index) => (
            <SkeletonCardEpisode key={index} />
          ))
        ) : locations.data && locations.data.length > 0 ? (
          locations.data.map((location: LocationProps) => (
            <CardLocation
              key={location.id}
              id={location.id}
              name={location.name}
              type={location.type}
            />
          ))
        ) : location.data && convertFavorites().length ? (
          <CardLocation
            key={location.data.id}
            id={location.data.id}
            name={location.data.name}
            type={location.data.type}
          />
        ) : (
          <div className={styles.empty}>
            <h1>Não há nenhuma localização favoritado.</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoriteLocations;
