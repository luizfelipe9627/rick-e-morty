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
  const buttons = document.querySelectorAll(`.${styles.numbers} button`);
  const buttonActive = document.querySelector(`.${styles.active}`);

  const updatePageNumbersForward = () => {
    const startPage = Math.min(
      Math.max(1, active <= pages - 3 ? active : pages - 3),
      pages - 3,
    );

    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
      const pageNumber = startPage + i;

      if (pageNumber <= pages) {
        button.textContent = pageNumber.toString();
        button.classList.remove(styles.active);

        if (pageNumber === active) {
          button.classList.add(styles.active);
        }
      } else {
        button.textContent = `${startPage + i - (pages - 1)}`;
        button.classList.remove(styles.active);
      }
    }
  };

  const updatePageNumbersBackward = () => {
    const startPage = Math.min(Math.max(1, active - 1), pages - 3);

    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
      const pageNumber = startPage + i;

      if (pageNumber <= pages) {
        button.textContent = pageNumber.toString();
        button.classList.remove(styles.active);

        if (pageNumber === active) {
          button.classList.add(styles.active);
        }
      } else {
        button.textContent = `${startPage + i - (pages - 1)}`;
        button.classList.remove(styles.active);
      }
    }
  };

  const handlePreviousPage = () => {
    const previousButton =
      buttonActive?.previousElementSibling as HTMLButtonElement;

    if (previousButton) {
      buttonActive?.classList.remove(styles.active);
      previousButton.classList.add(styles.active);
      setActive((prevActive) => prevActive - 1);
      setPage((prevPage) => prevPage - 1);
      updatePageNumbersBackward();
    } else if (active > 1) {
      const firstButton = buttons[0] as HTMLButtonElement;
      buttonActive?.classList.remove(styles.active);
      firstButton.classList.add(styles.active);
      setActive(1);
      setPage(1);
      updatePageNumbersBackward();
    }
  };

  const handleNextPage = () => {
    const nextButton = buttonActive?.nextElementSibling as HTMLButtonElement;

    if (nextButton) {
      buttonActive?.classList.remove(styles.active);
      nextButton.classList.add(styles.active);
      setActive((prevActive) => prevActive + 1);
      setPage((prevPage) => prevPage + 1);

      if (active >= pages) {
        updatePageNumbersForward();
      }
    } else if (active < pages) {
      setActive((prevActive) => prevActive + 1);
      setPage((prevPage) => prevPage + 1);
      updatePageNumbersForward();
    }
  };

  const handleActive = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    buttons.forEach((button) => {
      button.classList.remove(styles.active);
    });
    button.classList.add(styles.active);

    if (button.textContent) {
      setActive(Number(button.textContent));
      setPage(Number(button.textContent));
    }
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

          <div className={styles.numbers}>
            <button onClick={handleActive} className={styles.active}>
              1
            </button>
            <button onClick={handleActive}>2</button>
            <button onClick={handleActive}>3</button>
            <button onClick={handleActive}>4</button>
          </div>

          <span className={styles.next} onClick={handleNextPage}>
            <Arrow size="medium" direction="right" />
          </span>
        </div>
      </section>
    </>
  );
};

export default Characters;
