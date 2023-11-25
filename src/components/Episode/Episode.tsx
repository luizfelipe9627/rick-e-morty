import React from "react";
import styles from "./Episode.module.scss";
import Title from "../Title/Title";
import CardEpisode from "../Cards/CardEpisode";
import useFetch from "../../hooks/useFetch";

interface EpisodeProps {
  id: number;
  name: string;
  air_date: string;
  characters: string[];
  episode: string;
}

const Episode = () => {
  const episodes = useFetch<EpisodeProps[]>(
    "https://rickandmortyapi.com/api/episode/1,2,3,4",
  );
  
  return (
    <section className={`${styles.episodes} container`}>
      <Title label="Ver todos" to="episodes">Episódios</Title>
      <div className={styles.cards}>
        {episodes.loading && <p>Carregando...</p>}

        {episodes.data &&
          episodes.data.map((episode) => (
            <CardEpisode
              key={episode.id}
              id={episode.id}
              name={episode.name}
              air_date={episode.air_date}
              characters={episode.characters}
              episode={episode.episode}
            />
          ))}
      </div>
    </section>
  );
};

export default Episode;
