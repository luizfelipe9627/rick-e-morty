import React from "react";
import CharactersPreview from "./CharactersPreview";
import EpisodesPreview from "./EpisodesPreview";
import LocationsPreview from "./LocationsPreview";
import useFilter from "../../hooks/useFilter";
import MagnifyingGlass from "../Svg/MagnifyingGlass";
import styles from "./HomePreview.module.scss";
import FilteredCharacters from "../Filter/FilteredCharacters";
import FilteredEpisodes from "../Filter/FilteredEpisodes";
import ArrowRight from "../../assets/svg/ArrowRight.svg";
import FilteredLocations from "../Filter/FilteredLocations";
import ExclamationTriangle from "../../assets/svg/ExclamationTriangle.svg";

const HomePreview = () => {
  const { activeFilter, Filter } = useFilter();
  const [inputValue, setInputValue] = React.useState("");
  const [searchEmpty, setSearchEmpty] = React.useState(false);

  React.useEffect(() => {
    if (activeFilter === "" && inputValue !== "") {
      setSearchEmpty(true);
    } else {
      setSearchEmpty(false);
    }
  }, [activeFilter, inputValue]);

  return (
    <section className={styles.homePreview}>
      <div className={`${styles.wrapper} container`}>
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Personagem, episódio, localização..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            required
          />

          {searchEmpty && (
            <span className={styles.filterEmpty}>
              <img src={ExclamationTriangle} alt="Triângulo  de Exclamação" />
              Escolha o filtro.
            </span>
          )}

          <button className={styles.searchIcon}>
            <MagnifyingGlass size="medium" />
          </button>
        </form>

        <div className={styles.filter}>
          <p className={styles.title}>
            {searchEmpty && (
              <span className={styles.arrow}>
                <img src={ArrowRight} alt="Seta para direita" />
              </span>
            )}
            Filtrar por:
          </p>

          <Filter />
        </div>
      </div>

      <div className={`${styles.charactersResult} container`}>
        {activeFilter === "characters" && (
          <>
            {inputValue === "" ? (
              <>
                <h1 className={styles.title}>Digite o nome do personagem.</h1>
                <p className={styles.paragraph}>
                  Ou para retornar às categorias iniciais, basta clicar
                  novamente no filtro "Personagens".
                </p>
              </>
            ) : (
              <FilteredCharacters inputValue={inputValue} />
            )}
          </>
        )}

        {activeFilter === "episodes" && (
          <>
            {inputValue === "" ? (
              <>
                <h1 className={styles.title}>Digite o nome do episódio.</h1>
                <p className={styles.paragraph}>
                  Ou para retornar às categorias iniciais, basta clicar
                  novamente no filtro "Episódios".
                </p>
              </>
            ) : (
              <FilteredEpisodes inputValue={inputValue} />
            )}
          </>
        )}

        {activeFilter === "locations" && (
          <>
            {inputValue === "" ? (
              <>
                <h1 className={styles.title}>Digite o nome da localização.</h1>
                <p className={styles.paragraph}>
                  Ou para retornar às categorias iniciais, basta clicar
                  novamente no filtro "Localizações".
                </p>
              </>
            ) : (
              <FilteredLocations inputValue={inputValue} />
            )}
          </>
        )}
      </div>

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
