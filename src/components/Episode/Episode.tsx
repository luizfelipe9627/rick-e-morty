import styles from "./Episode.module.scss";
import Title from "../Title/Title1";
import CardEpisode from "../Cards/CardEpisode";
import useFetch from "../../hooks/useFetch";
import useRandomNumbers from "../../hooks/useRandomNumbers";

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
      <Title label="Ver todos" to="episodes">
        Episódios
      </Title>

      <div className={styles.cards}>
        {episodes.loading && <p>Carregando...</p>}

        {episodes.data &&
          episodes.data.map((episode) => (
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
