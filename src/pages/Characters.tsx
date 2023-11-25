import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Heart from "../components/Svg/Heart";
import Play from "../components/Svg/Play";
import Alien from "../components/Svg/Alien";
import Pulse from "../components/Svg/Pulse";
import Gender from "../components/Svg/Gender";
import useTheme from "../hooks/useTheme";
import React from "react";
import styles from "./Characters.module.scss";
interface CharacterProps {
  id: number;
  name: string;
  status: string;
  species: string;
  location: {
    name: string;
  };
  origin: {
    name: string;
  };
  image: string;
  episode: [];
  gender: string;
}

const Characters = () => {
  const { id } = useParams();
  const [theme] = useTheme();

  React.useEffect(() => {
    // Adiciona a classe ao body com base no tema
    document.body.classList.toggle("dark", theme === "dark");
    // Salva o tema no localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const character = useFetch<CharacterProps>(
    `https://rickandmortyapi.com/api/character/${id}`,
  );

  return (
    <section className={`${styles.characters} container`}>
      <div className={styles.wrapper}>
        {character.loading && <p>Carregando...</p>}

        {character.data && id && (
          <>
            <div className={styles.infos}>
              <img src={character.data.image} alt={character.data.name} />

              <div>
                <div className={styles.name}>
                  <h1>{character.data.name}</h1>
                  <Heart size="huge" />
                </div>

                <div className={styles.episode}>
                  {theme === "dark" ? (
                    <Play size="big" theme="dark" />
                  ) : (
                    <Play size="big" />
                  )}
                  <p>
                    Participou de {character.data.episode.length}{" "}
                    {character.data.episode.length > 1
                      ? "episódios"
                      : "episódio"}
                  </p>
                </div>

                <div className={styles.statistics}>
                  <p>
                    <Pulse size="big" />
                    {character.data.status === "Alive" ? "Vivo" : "Morto"}
                  </p>

                  <p>
                    {theme === "dark" ? (
                      <Alien size="big" theme="dark" />
                    ) : (
                      <Alien size="big" />
                    )}
                    {character.data.species === "Human"
                      ? "Humano"
                      : "Alienígena"}
                  </p>

                  <p className={styles.gender}>
                    {theme === "dark" ? (
                      <Gender size="big" theme="dark" />
                    ) : (
                      <Gender size="big" />
                    )}
                    {character.data.gender === "Male"
                      ? "Masculino"
                      : "Feminino"}
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.location}>
              <p>Componente a fazer</p>
              <p>Teste</p>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Characters;
