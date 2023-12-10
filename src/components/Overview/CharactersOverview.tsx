import useFetch from "../../hooks/useFetch";
import useTheme from "../../hooks/useTheme";
import React from "react";
import styles from "./Overview.module.scss";
import CardCharacter from "../../components/Cards/CardCharacter";
import Title from "../../components/Title/Title";
import Smiley from "../../components/Svg/Smiley";
import usePagination from "../../hooks/usePagination";
import SkeletonCardCharacter from "../../components/Skeleton/SkeletonCardCharacter";

const CharactersOverview = () => {
  const { theme } = useTheme();

  const characters = useFetch<CharacterProps>(
    `https://rickandmortyapi.com/api/character`,
  );

  const pages = characters.data?.info.pages;

  const { page, active, Controls } = usePagination(1, pages);

  const charactersPages = useFetch<CharacterProps>(
    `https://rickandmortyapi.com/api/character?page=${page}`,
  );

  React.useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  React.useEffect(() => {
    const cards = document.querySelector(`.${styles.cards}`) as HTMLDivElement;

    if (cards) {
      if (active === pages) {
        cards.style.height = "auto";
      } else {
        cards.style.height = "1640px";
      }
    }
  }, [active, page]);

  return (
    <section className={`${styles.charactersOverview} container`}>
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

      {characters.error ? (
        <p className={styles.error}>{characters.error}</p>
      ) : (
        <>
          <div className={styles.cards}>
            {charactersPages.loading
              ? Array.from({ length: 20 }).map((_, index) => (
                  <SkeletonCardCharacter key={index} />
                ))
              : charactersPages.data?.results?.map(
                  (character: CharacterProps) => (
                    <CardCharacter
                      key={character.id}
                      id={character.id}
                      image={character.image}
                      name={character.name}
                      status={character.status}
                      species={character.species}
                      origin={character.origin.name}
                    />
                  ),
                )}
          </div>
          <Controls />
        </>
      )}
    </section>
  );
};

export default CharactersOverview;
