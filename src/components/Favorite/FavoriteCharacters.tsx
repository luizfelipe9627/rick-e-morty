import styles from "./Favorite.module.scss";
import Title from "../Title/Title";
import useFetch from "../../hooks/useFetch";
import useFavorite from "../../hooks/useFavorite";
import CardCharacter from "../Cards/CardCharacter";
import SkeletonCardCharacter from "../Skeleton/SkeletonCardCharacter";

const FavoriteCharacters = () => {
  const { convertFavorites } = useFavorite({
    id: 0,
    localStorageName: "favoritesCharacters",
  });

  const characters = useFetch<CharacterProps[]>(
    `https://rickandmortyapi.com/api/character/${convertFavorites().toString()}`,
  );

  const character = useFetch<CharacterProps>(
    `https://rickandmortyapi.com/api/character/${convertFavorites().toString()}`,
  );

  return (
    <div className={styles.favorite}>
      <Title type="primary" label="Ver todos" to="characters/1">
        Personagens
      </Title>

      <div className={styles.cards}>
        {characters.error ? (
          <p className={styles.error}>{characters.error}</p>
        ) : characters.loading ? (
          Array.from({ length: 8 }).map((_, index) => (
            <SkeletonCardCharacter key={index} />
          ))
        ) : characters.data && characters.data.length > 0 ? (
          characters.data.map((character: CharacterProps) => (
            <CardCharacter
              key={character.id}
              id={character.id}
              image={character.image}
              name={character.name}
              status={character.status}
              species={character.species}
              origin={character.origin.name}
            />
          ))
        ) : character.data && convertFavorites().length ? (
          <CardCharacter
            key={character.data.id}
            id={character.data.id}
            image={character.data.image}
            name={character.data.name}
            status={character.data.status}
            species={character.data.species}
            origin={character.data.origin.name}
          />
        ) : (
          <div className={styles.empty}>
            <h1>Não há nenhum personagem favoritado.</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoriteCharacters;
