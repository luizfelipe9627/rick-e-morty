import styles from "./EpisodesOverview.module.scss";
import Title from "../Title/Title";
import Play from "../Svg/Play";
import useFetch from "../../hooks/useFetch";
import usePagination from "../../hooks/usePagination";
import SkeletonCardEpisode from "../Skeleton/SkeletonCardEpisode";
import CardEpisode from "../Cards/CardEpisode";

const EpisodesOverview = () => {
  const episodesPages = useFetch<EpisodeProps>(
    `https://rickandmortyapi.com/api/episode`,
  );

  const pages = episodesPages.data?.info.pages || 1;

  const { page, controls } = usePagination(1, pages);

  const episodes = useFetch<EpisodeProps>(
    `https://rickandmortyapi.com/api/episode?page=${page}`,
  );

  return (
    <section className={`${styles.episodesOverview} container`}>
      <Title type="secondary" componentSvg={<Play size="huge" />}>
        Mais episódios
      </Title>

      <div className={styles.cards}>
        {episodes.loading
          ? Array.from({ length: 20 }).map((_, index) => (
              <SkeletonCardEpisode key={index} />
            ))
          : episodes.data?.results?.map((episode: EpisodeProps) => (
              <CardEpisode
                key={episode.id}
                id={episode.id}
                name={episode.name}
                episode={episode.episode}
              />
            ))}
      </div>

      {controls}
    </section>
  );
};

export default EpisodesOverview;
