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
import CardLocation from "../components/Cards/CardLocation";
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
  const [isHeartFilled, setHeartFilled] = React.useState(false);

  const handleClick: React.MouseEventHandler<SVGElement> = () => {
    setHeartFilled(!isHeartFilled);
  };

  React.useEffect(() => {
    // Adiciona a classe ao body com base no tema
    document.body.classList.toggle("dark", theme === "dark");
    // Salva o tema no localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const character = useFetch<CharacterProps>(
    `https://rickandmortyapi.com/api/character/${id}`,
  );
  console.log(character.data);

  return (
    <>
      <section className={styles.charactersIntro}>
        <div className={`${styles.wrapper} container`}>
          {character.loading && <p>Carregando...</p>}

          {character.data && id && (
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
                    <p>
                      <Pulse size="big" />
                      {character.data.status === "Alive" ? "Vivo" : "Morto"}
                    </p>

                    <p>
                      <Alien size="big" />
                      {character.data.species === "Human"
                        ? "Humano"
                        : "Alienígena"}
                    </p>

                    <p className={styles.gender}>
                      <Gender size="big" />
                      {character.data.gender === "Male"
                        ? "Masculino"
                        : "Feminino"}
                    </p>
                  </div>

                  <div className={styles.location}>
                    <CardLocation
                      id={character.data.id}
                      type="Planet"
                      name={character.data.origin.name}
                    />
                    <CardLocation
                      type=""
                      id={character.data.id}
                      name={character.data.location.name}
                    />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      <section className={`${styles.characters} container`}>
        <h1>Titulo</h1>
        <div className={styles.cards}></div>
      </section>
    </>
  );
};

export default Characters;
