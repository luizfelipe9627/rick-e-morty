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

const CharactersIntroduction = () => {
  const { id } = useParams();
  const [theme] = useTheme();
  const [isHeartFilled, setHeartFilled] = React.useState(false);

  const character = useFetch<CharacterProps>(
    `https://rickandmortyapi.com/api/character/${id}`,
  );

  React.useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleClick: React.MouseEventHandler<SVGElement> = () => {
    setHeartFilled(!isHeartFilled);
  };

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
                      fill={isHeartFilled}
                      onClick={handleClick}
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
                    {character.data?.origin.name !== "unknown" && (
                      <>
                        <CardLocation
                          id={character.data.id}
                          type="Planet"
                          name={character.data?.origin.name}
                        />
                        <CardLocation
                          id={character.data.id}
                          type=""
                          name={character.data.location.name}
                        />
                      </>
                    )}
                  </div>
                </div>
              </div>
            </>
          )
        )}
      </div>
    </section>
  );
};

export default CharactersIntroduction;
