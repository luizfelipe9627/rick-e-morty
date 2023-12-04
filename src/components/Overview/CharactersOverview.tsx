import useFetch from "../../hooks/useFetch";
import useTheme from "../../hooks/useTheme";
import React from "react";
import styles from "./CharactersOverview.module.scss";
import CardCharacter from "../../components/Cards/CardCharacter";
import Title from "../../components/Title/Title";
import Smiley from "../../components/Svg/Smiley";
import usePagination from "../../hooks/usePagination";
import SkeletonCardCharacter from "../../components/Skeleton/SkeletonCardCharacter";

const CharactersOverview = () => {
  const [theme] = useTheme();

  const charactersPages = useFetch<CharacterProps>(
    `https://rickandmortyapi.com/api/character`,
  );

  const pages = charactersPages.data?.info.pages || 1;

  const { page, active, controls } = usePagination(1, pages);

  const characters = useFetch<CharacterProps>(
    `https://rickandmortyapi.com/api/character?page=${page}`,
  );

  React.useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const charactersRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const cards = document.querySelector(`.${styles.cards}`) as HTMLDivElement;
    const buttonActive = document.querySelector(
      `.${styles.active}`,
    ) as HTMLButtonElement;

    if (buttonActive && active === pages) {
      //cards.style.height = "auto";
    } else {
      //cards.style.height = "auto";
    }
  }, [active, page]);

  return (
    <section
      className={`${styles.charactersOverview} container`}
      ref={charactersRef}
    >
      <Title
        type="secondary"
        componentSvg={
          theme === "dark" ? (
            <Smiley size="big" theme="dark" />
          ) : (
            <Smiley size="big" />
          )
        }
      >
        Mais personagens
      </Title>

      <div className={styles.cards}>
        {characters.loading
          ? Array.from({ length: 20 }).map((_, index) => (
              <SkeletonCardCharacter key={index} />
            ))
          : characters.data?.results?.map((character: CharacterProps) => (
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

      {controls}
    </section>
  );
};

export default CharactersOverview;
