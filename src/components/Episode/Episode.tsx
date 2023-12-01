import styles from "./Episode.module.scss";
import Title from "../Title/Title";
import CardEpisode from "../Cards/CardEpisode";
import useFetch from "../../hooks/useFetch";
import useRandomNumbers from "../../hooks/useRandomNumbers";
import SkeletonCardEpisode from "../Skeleton/SkeletonCardEpisode";

interface EpisodeProps {
  id: number;
  name: string;
  episode: string;
}

const Episode = () => {
  const randomNumbers = useRandomNumbers(4, 51);
  const episodes = useFetch<EpisodeProps[]>(
    `https://rickandmortyapi.com/api/episode/[${randomNumbers.join(",")}]`,
  );

  return (
    <section className={`${styles.episodes} container`}>
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
      </div>
    </section>
  );
};

export default Episode;
