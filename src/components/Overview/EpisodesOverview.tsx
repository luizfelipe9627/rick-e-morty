import styles from "./Overview.module.scss";
import Title from "../Title/Title";
import Play from "../Svg/Play";
import useFetch from "../../hooks/useFetch";
import usePagination from "../../hooks/usePagination";
import SkeletonCardEpisode from "../Skeleton/SkeletonCardEpisode";
import CardEpisode from "../Cards/CardEpisode";

const EpisodesOverview = () => {
  const episodes = useFetch<EpisodeProps>(
    `https://rickandmortyapi.com/api/episode`,
  );

  const pages = episodes.data?.info.pages;

  const { page, Controls } = usePagination(1, pages);

  const episodesPages = useFetch<EpisodeProps>(
    `https://rickandmortyapi.com/api/episode?page=${page}`,
  );

  return (
    <section className={`${styles.episodesOverview} container`}>
      <Title type="secondary" componentSvg={<Play size="huge" />}>
        Mais episódios
      </Title>

      {episodes.error ? (
        <p className={styles.error}>{episodes.error}</p>
      ) : (
        <>
          <div className={styles.cards}>
            {episodesPages.loading
              ? Array.from({ length: 20 }).map((_, index) => (
                  <SkeletonCardEpisode key={index} />
                ))
              : episodesPages.data?.results?.map((episode: EpisodeProps) => (
                  <CardEpisode
                    key={episode.id}
                    id={episode.id}
                    name={episode.name}
                    episode={episode.episode}
                  />
                ))}
          </div>
          <Controls />
        </>
      )}
    </section>
  );
};

export default EpisodesOverview;
