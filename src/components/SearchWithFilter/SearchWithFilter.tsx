import React from "react";
import styles from "./SearchWithFilter.module.scss";
import MagnifyingGlass from "../Svg/MagnifyingGlass";
import Filter from "../Filter/Filter";

const SearchWithFilter = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "light",
  );

  const updateTheme = (newTheme: string) => {
    setTheme(newTheme);
  };

  const handleThemeClick = (newTheme: string) => {
    updateTheme(newTheme);
  };

  React.useEffect(() => {
    const buttonDark = document.querySelector(
      ".buttonDark",
    ) as HTMLButtonElement;
    const buttonLight = document.querySelector(
      ".buttonLight",
    ) as HTMLButtonElement;

    buttonDark?.addEventListener("click", () => handleThemeClick("dark"));
    buttonLight?.addEventListener("click", () => handleThemeClick("light"));

    return () => {
      buttonDark?.removeEventListener("click", () => handleThemeClick("dark"));
      buttonLight?.removeEventListener("click", () =>
        handleThemeClick("light"),
      );
    };
  }, [theme]);

  return (
    <div className={`${styles.searchWithFilter} container`}>
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
  );
};

export default SearchWithFilter;
