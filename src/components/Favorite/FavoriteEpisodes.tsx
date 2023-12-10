import styles from "./Favorite.module.scss";
import Title from "../Title/Title";
import useFetch from "../../hooks/useFetch";
import useFavorite from "../../hooks/useFavorite";
import CardEpisode from "../Cards/CardEpisode";
import SkeletonCardEpisode from "../Skeleton/SkeletonCardEpisode";

const FavoriteEpisodes = () => {
  const { convertFavorites } = useFavorite({
    id: 0,
    localStorageName: "favoritesEpisodes",
  });

  const episodes = useFetch<EpisodeProps[]>(
    `https://rickandmortyapi.com/api/episode/${convertFavorites().toString()}`,
  );

  const episode = useFetch<EpisodeProps>(
    `https://rickandmortyapi.com/api/episode/${convertFavorites().toString()}`,
  );

  return (
    <div className={styles.favorite}>
      <Title type="primary" label="Ver todos" to="episodes/1">
        Epísodios
      </Title>

      <div className={styles.cards}>
        {episodes.error ? (
          <p className={styles.error}>{episodes.error}</p>
        ) : episodes.loading ? (
          Array.from({ length: 4 }).map((_, index) => (
            <SkeletonCardEpisode key={index} />
          ))
        ) : episodes.data && episodes.data.length > 0 ? (
          episodes.data.map((episode: EpisodeProps) => (
            <CardEpisode
              key={episode.id}
              id={episode.id}
              name={episode.name}
              episode={episode.episode}
            />
          ))
        ) : episode.data && convertFavorites().length ? (
          <CardEpisode
            key={episode.data.id}
            id={episode.data.id}
            name={episode.data.name}
            episode={episode.data.episode}
          />
        ) : (
          <div className={styles.empty}>
            <h1>Não há nenhum episódio favoritado.</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoriteEpisodes;
