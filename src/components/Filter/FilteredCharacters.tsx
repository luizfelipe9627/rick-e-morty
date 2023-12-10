import React from "react";
import styles from "./Filtered.module.scss";
import CardCharacter from "../Cards/CardCharacter";
import useFetch from "../../hooks/useFetch";
import SkeletonCardCharacter from "../Skeleton/SkeletonCardCharacter";

interface FilteredCharactersProps {
  inputValue: string;
}

const FilteredCharacters = ({ inputValue }: FilteredCharactersProps) => {
  const [page, setPage] = React.useState(1);
  const [charactersList, setCharactersList] = React.useState<CharacterProps[]>(
    [],
  );
  const characters = useFetch<CharacterProps>(
    `https://rickandmortyapi.com/api/character/?page=${page}`,
  );
  const totalPages = characters.data?.info.pages || 1;

  React.useEffect(() => {
    if (characters.data && characters.data.results) {
      setCharactersList((prevCharacters) => [
        ...prevCharacters,
        ...(characters.data?.results as CharacterProps[]),
      ]);
    }
  }, [characters.data]);

  React.useEffect(() => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [page, totalPages]);

  const filteredCharacters = charactersList.filter((character) =>
    character.name.toLowerCase().includes(inputValue.trim().toLowerCase()),
  );

  const isLastPage = page === totalPages;

  return characters.error ? (
    <p className={styles.error}>{characters.error}</p>
  ) : filteredCharacters.length > 0 ? (
    <div className="container">
      <div className={styles.cardsCharacters}>
        {!isLastPage
          ? Array.from({ length: 20 }).map((_, index) => (
              <SkeletonCardCharacter key={index} />
            ))
          : isLastPage &&
            filteredCharacters.map((character: CharacterProps) => (
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
    </div>
  ) : (
    <>
      <h1 className={styles.title}>Nenhum personagem encontrado.</h1>
      <p>
        Para retornar às categorias iniciais, basta clicar novamente no filtro
        "Personagens".
      </p>
    </>
  );
};

export default FilteredCharacters;
