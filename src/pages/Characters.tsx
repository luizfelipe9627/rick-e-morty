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
}

interface CharacterInfoProps {
  info: { count: number; pages: number; next: string; prev: string };
}

const Characters = () => {
  const { id } = useParams();
  const [theme] = useTheme();
  const [isHeartFilled, setHeartFilled] = React.useState(false);

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
    `https://rickandmortyapi.com/api/character`,
  );

  const charactersInfo = useFetch<CharacterInfoProps>(
    `https://rickandmortyapi.com/api/character`,
  );

  const [page, setPage] = React.useState(1);
  const [active, setActive] = React.useState(1);
  const pages = charactersInfo.data?.info.pages;
  const buttonActive = document.querySelector(`.${styles.active}`);
  const buttons = document.querySelectorAll(`.${styles.numbers} button`);
  const [totalPages, setTotalPages] = React.useState(1);

  const handlePreviousPage = () => {
    const previousButton =
      buttonActive?.previousElementSibling as HTMLButtonElement;

    if (previousButton) {
      buttonActive?.classList.remove(styles.active);
      previousButton.classList.add(styles.active);
      setActive((prevActive) => prevActive - 1);
      setPage((prevPage) => prevPage - 1);
    } else {
      buttons[0].classList.remove(styles.active);
      buttons[buttons.length - 1].classList.add(styles.active);
      setActive(buttons.length);
      setPage(buttons.length);
    }
  };

  const handleNextPage = () => {
    const nextButton = buttonActive?.nextElementSibling as HTMLButtonElement;

    if (nextButton) {
      buttonActive?.classList.remove(styles.active);
      nextButton.classList.add(styles.active);
      setActive((prevActive) => prevActive + 1);
      if (pages) {
        setPage((prevPage) => (prevPage + 1) % pages);
      }
    } else {
      buttons[buttons.length - 1].classList.remove(styles.active);
      buttons[0].classList.add(styles.active);
      setActive(1);
      setPage(0);
    }

    if (!nextButton) {
      const newButtonTexts = Array.from(buttons).map((button, index) => {
        if (!pages) return "1";
        const nextPage = (page + index) % pages;
        button.textContent = (nextPage + 1).toString(); // Adiciona 1 para exibir como página real
        return (nextPage + 1).toString();
      });

      console.log("Novos textos dos botões:", newButtonTexts);
    }
  };

  React.useEffect(() => {
    if (charactersInfo.data) {
      setTotalPages(charactersInfo.data.info.pages);
    }
  }, [charactersInfo.data]);

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
