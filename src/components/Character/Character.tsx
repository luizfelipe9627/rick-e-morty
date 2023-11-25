import React from "react";
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

// Função para gerar números aleatórios únicos em um intervalo
const generateRandomNumbers = (count: number, max: number): number[] => {
  const numbers: number[] = [];
  while (numbers.length < count) {
    const randomNumber = Math.floor(Math.random() * max) + 1;
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }
  return numbers;
};

const Character = () => {
  const [randomNumbers, setRandomNumbers] = React.useState<number[]>([]);

  React.useEffect(() => {
    // Gera uma lista de 8 números aleatórios no intervalo de 1 a 826
    const numbers = generateRandomNumbers(8, 826);
    setRandomNumbers(numbers);
  }, []);

  const characters = useFetch<CharacterProps[]>(
    `https://rickandmortyapi.com/api/character/[${randomNumbers.join(",")}]`,
  );

  return (
    <section className={`${styles.character} container`}>
      <Search />
      <Title label="Ver todos" to="characters">Personagens</Title>

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
