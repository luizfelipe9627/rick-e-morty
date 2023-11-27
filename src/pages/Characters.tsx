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
import CardCharacter from "../components/Cards/CardCharacter";
import Arrow from "../components/Svg/Arrow";
import { render } from "react-dom";

interface CharacterResultsProps {
  results: [];
  id: number;
  name: string;
  status: string;
  species: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  image: string;
  episode: string[];
  gender: string;
  info: { count: number; pages: number; next: string; prev: string };
}

const Characters = () => {
  const { id } = useParams();
  const [theme] = useTheme();
  const [isHeartFilled, setHeartFilled] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [active, setActive] = React.useState(1);

  const handleClick: React.MouseEventHandler<SVGElement> = () => {
    setHeartFilled(!isHeartFilled);
  };

  React.useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const character = useFetch<CharacterResultsProps>(
    `https://rickandmortyapi.com/api/character/${id}`,
  );

  const characters = useFetch<CharacterResultsProps>(
    `https://rickandmortyapi.com/api/character?page=${page}`,
  );

  const pages = characters.data?.info.pages || 1;

  const handleNextPage = () => {
    if (page < pages) {
      setPage(page + 1);
      setActive(active + 1);
    } else {
      // Se estiver no último botão, volte ao primeiro
      setPage(1);
      setActive(1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
      setActive(active - 1);
    } else {
      // Se estiver no primeiro botão, vá para o último
      setPage(pages);
      setActive(pages);
    }
  };

  const handleActive = (pageNumber: number) => {
    if (pageNumber === pages) {
      setActive(pages);
      setPage(1);
    } else {
      setActive(pageNumber);
      setPage(pageNumber);
    }
  };

  const renderPageButtons = () => {
    const buttons = [] as any;
    const maxVisibleButtons = 4;

    // Inicializa start e end
    let start = Math.max(1, active - maxVisibleButtons + 1);
    let end = Math.min(pages, start + maxVisibleButtons - 1);

    // Se o botão "anterior" foi clicado, inverte a ordem
    const buttonPrevious = document.querySelector(
      `.${styles.previous}`,
    ) as HTMLSpanElement;

    const renderButtons = () => {
      buttons.length = 0; // Limpa o array antes de renderizar novamente

      buttonPrevious?.addEventListener("click", () => {
        start = Math.max(1, active);
        end = Math.min(pages, start + maxVisibleButtons - 1);

        renderButtons();
      });

      for (let i = start; i <= end; i++) {
        buttons.push(
          <button
            onClick={() => handleActive(i)}
            key={i}
            className={active === i ? styles.active : ""}
          >
            {i}
          </button>,
        );
      }
    };

    renderButtons();

    return buttons;
  };

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
        <div className={styles.cards}>
          {characters.loading && <p>Carregando...</p>}

          {characters.data?.results &&
            characters.data.results.map((character: CharacterResultsProps) => (
              <CardCharacter
                key={character.id}
                id={character.id}
                image={character.image}
                name={character.name}
                status={character.status}
                species={character.species}
                origin={character.origin.name}
              />
            ))}
        </div>

        <div className={styles.controls}>
          <span className={styles.previous} onClick={handlePreviousPage}>
            <Arrow size="medium" direction="left" />
          </span>

          <div className={styles.numbers}>{renderPageButtons()}</div>

          <span className={styles.next} onClick={handleNextPage}>
            <Arrow size="medium" direction="right" />
          </span>
        </div>
      </section>
    </>
  );
};

export default Characters;
