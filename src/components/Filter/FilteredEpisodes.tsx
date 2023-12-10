import React from "react";
import styles from "./Filtered.module.scss";
import useFetch from "../../hooks/useFetch";
import SkeletonCardEpisode from "../Skeleton/SkeletonCardEpisode";
import CardEpisode from "../Cards/CardEpisode";

interface FilteredEpisodesProps {
  inputValue: string;
}

const FilteredEpisodes = ({ inputValue }: FilteredEpisodesProps) => {
  const [page, setPage] = React.useState(1);
  const [episodesList, setEpisodesList] = React.useState<EpisodeProps[]>([]);
  const episodes = useFetch<EpisodeProps>(
    `https://rickandmortyapi.com/api/episode/?page=${page}`,
  );
  const totalPages = episodes.data?.info.pages || 1;

  React.useEffect(() => {
    if (episodes.data && episodes.data.results) {
      setEpisodesList((prevEpisodes) => [
        ...prevEpisodes,
        ...(episodes.data?.results as EpisodeProps[]),
      ]);
    }
  }, [episodes.data]);

  React.useEffect(() => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [page, totalPages]);

  const filteredEpisodes = episodesList.filter((episode) =>
    episode.name.toLowerCase().includes(inputValue.trim().toLowerCase()),
  );

  const isLastPage = page === totalPages;

  return episodes.error ? (
    <p className={styles.error}>{episodes.error}</p>
  ) : filteredEpisodes.length > 0 ? (
    <div className="container">
      <div className={styles.cardsEpisodes}>
        {!isLastPage
          ? Array.from({ length: 20 }).map((_, index) => (
              <SkeletonCardEpisode key={index} />
            ))
          : isLastPage &&
            filteredEpisodes.map((episode: EpisodeProps) => (
              <CardEpisode
                key={episode.id}
                id={episode.id}
                name={episode.name}
                episode={episode.episode}
              />
            ))}
      </div>
    </div>
  ) : (
    <>
      <h1 className={styles.title}>Nenhum episódio encontrado.</h1>
      <p>
        Para retornar às categorias iniciais, basta clicar novamente no filtro
        "Episódios".
      </p>
    </>
  );
};

export default FilteredEpisodes;
