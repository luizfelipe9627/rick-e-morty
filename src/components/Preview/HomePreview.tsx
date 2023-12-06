import CharactersPreview from "./CharactersPreview";
import EpisodesPreview from "./EpisodesPreview";
import LocationsPreview from "./LocationsPreview";
import useFilter from "../../hooks/useFilter";
import MagnifyingGlass from "../Svg/MagnifyingGlass";
import styles from "./HomePreview.module.scss";

const HomePreview = () => {
  const { activeFilter, Filter } = useFilter();

  return (
    <section className={styles.homePreview}>
      <div className={`${styles.wrapper} container`}>
        <form className={styles.input}>
          <input
            type="text"
            placeholder="Personagem, episódio, localização..."
            required
          />
          <button>
            <MagnifyingGlass size="medium" />
          </button>
        </form>

        <div className={styles.filter}>
          <p>Filtrar por:</p>

          <Filter />
        </div>
      </div>

      {activeFilter === "" && (
        <>
          <CharactersPreview />
          <EpisodesPreview />
          <LocationsPreview />
        </>
      )}
      {activeFilter === "characters" && <CharactersPreview />}
      {activeFilter === "episodes" && <EpisodesPreview />}
      {activeFilter === "locations" && <LocationsPreview />}
    </section>
  );
};

export default HomePreview;
