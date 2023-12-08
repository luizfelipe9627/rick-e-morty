import React from "react";
import styles from "./EpisodesIntroduction.module.scss";
import Play from "../Svg/Play";
import useTheme from "../../hooks/useTheme";
import Heart from "../Svg/Heart";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Smiley from "../Svg/Smiley";
import Calendar from "../Svg/Calendar";
import Queue from "../Svg/Queue";
import SkeletonEpisode from "../Skeleton/SkeletonEpisode";
import useFavorite from "../../hooks/useFavorite";

const EpisodesIntroduction = () => {
  const { theme } = useTheme();
  const { id } = useParams();

  const { checkIfFavorite, toggleFavorite } = useFavorite({
    id: Number(id),
    localStorageName: "favoritesEpisodes",
  });

  const episode = useFetch<EpisodeProps>(
    `https://rickandmortyapi.com/api/episode/${id}`,
  );

  return (
    <section className={styles.episodesIntroduction}>
      {episode.loading ? (
        <SkeletonEpisode />
      ) : (
        episode.data && (
          <>
            <div className={`${styles.wrapper} container`}>
              <span className={styles.icon}>
                <Play size="veryHuge" />
              </span>

              <div className={styles.title}>
                <h1>{episode.data?.name}</h1>
                <Heart
                  size="huge"
                  fill={checkIfFavorite()}
                  onClick={toggleFavorite}
                />
              </div>

              <div className={styles.infos}>
                <div className={styles.airDate}>
                  <Calendar size="medium" />
                  <p>{episode.data?.air_date}</p>
                </div>

                <div className={styles.episode}>
                  <Queue size="medium" />
                  <p>{episode.data?.episode}</p>
                </div>
              </div>

              <div className={styles.statistic}>
                {theme === "dark" ? (
                  <Smiley size="medium" theme="dark" />
                ) : (
                  <Smiley size="medium" />
                )}
                <p>
                  {episode.data?.characters.length}{" "}
                  {episode.data && episode.data?.characters.length > 1
                    ? "Personagens"
                    : "Personagem"}{" "}
                  participaram deste episódio
                </p>
              </div>
            </div>
          </>
        )
      )}
    </section>
  );
};

export default EpisodesIntroduction;
