import React from "react";
import Label from "../components/Label/Label";
import Planet from "../components/Svg/Planet";
import Play from "../components/Svg/Play";
import Smiley from "../components/Svg/Smiley";
import styles from "./useFilter.module.scss";
import { useTheme } from "../context/ThemeContext";

const useFilter = (active?: string) => {
  const [activeFilter, setActiveFilter] = React.useState(`${active || ""}`);
  const { theme } = useTheme();

  const handleClick = (filterValue: string) => {
    setActiveFilter((prevFilter) =>
      prevFilter === filterValue ? "" : filterValue,
    );
  };

  const Filter: React.FC = () => {
    return (
      <div className={styles.filter}>
        <Label
          componentSvg={
            theme === "dark" ? (
              <Smiley size="small" theme="dark" />
            ) : (
              <Smiley size="small" />
            )
          }
          altImg="Carinha"
          onClick={() => handleClick("characters")}
          active={activeFilter === "characters"}
        >
          Personagens
        </Label>
        <Label
          componentSvg={<Play size="medium" />}
          altImg="Play"
          onClick={() => handleClick("episodes")}
          active={activeFilter === "episodes"}
        >
          Episódios
        </Label>
        <Label
          componentSvg={<Planet size="medium" />}
          altImg="Planeta"
          onClick={() => handleClick("locations")}
          active={activeFilter === "locations"}
        >
          Localizações
        </Label>
      </div>
    );
  };

  return {
    activeFilter,
    Filter,
  };
};

export default useFilter;
