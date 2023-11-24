import Search from "../Search/Search";
import styles from "./Character.module.scss";
import Title from "../Title/Title";
import CardCharacter from "../Cards/CardCharacter";
import useFetch from "../../hooks/useFetch";

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
  const characters = useFetch<CharacterProps[]>(
    "https://rickandmortyapi.com/api/character/[1,2,3,4,5,6,7,8]",
  );

  return (
    <section className={`${styles.character} container`}>
      <Search />
      <Title>Personagens</Title>

      <div className={styles.cards}>
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
