import styles from "./CharactersIntroduction.module.scss";
import CardLocation from "../Cards/CardLocation";
import SkeletonCharacter from "../Skeleton/SkeletonCharacter";
import Alien from "../Svg/Alien";
import Gender from "../Svg/Gender";
import Heart from "../Svg/Heart";
import Play from "../Svg/Play";
import Pulse from "../Svg/Pulse";
import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import useTheme from "../../hooks/useTheme";
import useFavorite from "../../hooks/useFavorite";

const CharactersIntroduction = () => {
  const { id } = useParams();
  const { theme } = useTheme();

  const { checkIfFavorite, toggleFavorite } = useFavorite({
    id: Number(id),
    localStorageName: "favoritesCharacters",
  });

  const character = useFetch<CharacterProps>(
    `https://rickandmortyapi.com/api/character/${id}`,
  );

  const originUrl = character.data?.origin.url;
  const idOrigin = originUrl?.split("/")[originUrl.split("/").length - 1];

  const locationUrl = character.data?.location.url;
  const idLocation = locationUrl?.split("/")[locationUrl.split("/").length - 1];

  React.useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <section className={styles.charactersIntroduction}>
      <div className={`${styles.wrapper} container`}>
        {character.loading ? (
          <SkeletonCharacter />
        ) : (
          character.data &&
          id && (
            <>
              <div className={styles.infos}>
                <div className={styles.img}>
                  <img src={character.data.image} alt={character.data.name} />
                </div>

                <div className={styles.content}>
                  <div className={styles.name}>
                    <h1>{character.data.name}</h1>
                    <Heart
                      size="huge"
                      fill={checkIfFavorite()}
                      onClick={toggleFavorite}
                    />
                  </div>

                  <div className={styles.episode}>
                    <Play size="big" />
                    <p>
                      Participou de {character.data.episode.length}{" "}
                      {character.data.episode.length > 1
                        ? "episódios"
                        : "episódio"}
                    </p>
                  </div>

                  <div className={styles.statistics}>
                    <div>
                      <Pulse size="big" />
                      <p>
                        {character.data.status === "Alive" ? "Vivo" : "Morto"}
                      </p>
                    </div>

                    <div>
                      <Alien size="big" />
                      <p>
                        {character.data.species === "Human"
                          ? "Humano"
                          : "Alienígena"}
                      </p>
                    </div>

                    <div>
                      <Gender size="big" />
                      <p className={styles.gender}>
                        {character.data.gender === "Male"
                          ? "Masculino"
                          : "Feminino"}
                      </p>
                    </div>
                  </div>

                  <div className={styles.location}>
                    {idOrigin && (
                      <CardLocation
                        id={idOrigin ? Number(idOrigin) : 0}
                        type="Planet"
                        name={character.data?.origin.name}
                      />
                    )}

                    {idLocation && (
                      <CardLocation
                        id={idLocation ? Number(idLocation) : 0}
                        type=""
                        name={character.data.location.name}
                      />
                    )}
                  </div>
                </div>
              </div>
            </>
          )
        )}
        {character.error && <p className={styles.error}>{character.error}</p>}
      </div>
    </section>
  );
};

export default CharactersIntroduction;
