import React from "react";
import styles from "./Characters.module.scss";
import CardCharacter from "../Cards/CardCharacter";
import useFetch from "../../hooks/useFetch";
import SkeletonCardCharacter from "../Skeleton/SkeletonCardCharacter";

interface CharactersProps {
  inputValue: string;
}

const Characters = ({ inputValue }: CharactersProps) => {
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

  // Filtra os personagens com base no inputValue
  const filteredCharacters = charactersList.filter((character) =>
    character.name.toLowerCase().includes(inputValue.toLowerCase()),
  );

  return (
    <div className={`${styles.characters} container`}>
      <div className={styles.cards}>
        {characters.loading
          ? Array.from({ length: 20 }).map((_, index) => (
              <SkeletonCardCharacter key={index} />
            ))
          : filteredCharacters.map((character: CharacterProps) => (
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
  );
};

export default Characters;
