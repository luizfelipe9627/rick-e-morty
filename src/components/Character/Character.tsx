import Search from "../Search/Search";
import styles from "./Character.module.scss";
import Title from "../Title/Title1";
import CardCharacter from "../Cards/CardCharacter";
import useFetch from "../../hooks/useFetch";
import useRandomNumbers from "../../hooks/useRandomNumbers";

interface CharacterProps {
  id: number;
  name: string;
  status: string;
  species: string;
  origin: {
    name: string;
  };
  image: string;
}

const Character = () => {
  const randomNumbers = useRandomNumbers(8, 826);
  const characters = useFetch<CharacterProps[]>(
    `https://rickandmortyapi.com/api/character/[${randomNumbers.join(",")}]`,
  );

  return (
    <section className={`${styles.character} container`}>
      <Search />
      <Title label="Ver todos" to="characters">
        Personagens
      </Title>

      <div className={styles.cards}>
        {characters.loading && <p>Carregando...</p>}

        {characters.data &&
          characters.data.map((character) => (
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
    </section>
  );
};

export default Character;
