import styles from "./Preview.module.scss";
import Title from "../Title/Title";
import CardEpisode from "../Cards/CardEpisode";
import useFetch from "../../hooks/useFetch";
import useRandomNumbers from "../../hooks/useRandomNumbers";
import SkeletonCardEpisode from "../Skeleton/SkeletonCardEpisode";

interface EpisodesPreviewProps {
  id: number;
  name: string;
  episode: string;
}

const EpisodesPreview = () => {
  const randomNumbers = useRandomNumbers(4, 51);
  const episodes = useFetch<EpisodesPreviewProps[]>(
    `https://rickandmortyapi.com/api/episode/[${randomNumbers.join(",")}]`,
  );

  return (
    <div className={`${styles.episodesPreview} container`}>
      <Title type="primary" label="Ver todos" to="episodes/1">
        Episódios
      </Title>

      <div className={styles.cards}>
        {episodes.loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <SkeletonCardEpisode key={index} />
            ))
          : episodes.data?.map((episode) => (
              <CardEpisode
                key={episode.id}
                id={episode.id}
                name={episode.name}
                episode={episode.episode}
              />
            ))}
        {episodes.error && <p className={styles.error}>{episodes.error}</p>}
      </div>
    </div>
  );
};

export default EpisodesPreview;
