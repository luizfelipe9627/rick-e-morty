import React from "react";
import CharactersPreview from "./CharactersPreview";
import EpisodesPreview from "./EpisodesPreview";
import LocationsPreview from "./LocationsPreview";
import useFilter from "../../hooks/useFilter";
import MagnifyingGlass from "../Svg/MagnifyingGlass";
import styles from "./HomePreview.module.scss";
import Characters from "../Characters/Characters";

const HomePreview = () => {
  const { activeFilter, Filter } = useFilter();
  const [inputValue, setInputValue] = React.useState("");

  console.log(activeFilter);
  return (
    <section className={styles.homePreview}>
      <div className={`${styles.wrapper} container`}>
        <form className={styles.input}>
          <input
            type="text"
            placeholder="Personagem, episódio, localização..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            required
          />
          <div className={styles.searchIcon}>
            <MagnifyingGlass size="medium" />
          </div>
        </form>

        <div className={styles.filter}>
          <p>Filtrar por:</p>

          <Filter />
        </div>
      </div>

      {activeFilter === "characters" && (
        <div className={`${styles.charactersResult} container`}>
          {inputValue === "" ? (
            <h1>Digite o nome do personagem.</h1>
          ) : (
            <Characters inputValue={inputValue} />
          )}
        </div>
      )}

      {activeFilter === "" && (
        <>
          <CharactersPreview />
          <EpisodesPreview />
          <LocationsPreview />
        </>
      )}
    </section>
  );
};

export default HomePreview;
