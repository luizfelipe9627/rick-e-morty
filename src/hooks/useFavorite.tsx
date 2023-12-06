import { useState } from "react";
import { useParams } from "react-router-dom";

interface UseFavoriteProps {
  id: number;
  localStorageName: string;
}

const useFavorite = ({ id, localStorageName }: UseFavoriteProps) => {
  const [isHeartFilled, setHeartFilled] = useState(
    () =>
      JSON.parse(localStorage.getItem(localStorageName) || "{}")[id] || false,
  );

  const toggleFavorite = () => {
    const updatedFavorites = {
      ...JSON.parse(localStorage.getItem(localStorageName) || "{}"),
      [id]: !isHeartFilled,
    };

    if (isHeartFilled) {
      delete updatedFavorites[id];
    }

    localStorage.setItem(localStorageName, JSON.stringify(updatedFavorites));
    setHeartFilled(!isHeartFilled);
  };

  const checkIfFavorite = () => {
    const { id } = useParams();
    const localStorageFavorites = localStorage.getItem(localStorageName);

    if (!localStorageFavorites) return false;

    const favoritesKey = Object.keys(JSON.parse(localStorageFavorites)).map(
      (id) => parseInt(id),
    ) as number[];
    const favoritesValues = Object.values(
      JSON.parse(localStorageFavorites),
    ) as boolean[];

    if (favoritesKey.includes(Number(id)) && favoritesValues.includes(true)) {
      return true;
    } else {
      return false;
    }
  };

  const convertFavorites = () => {
    const favorites = JSON.parse(
      localStorage.getItem(localStorageName) || "{}",
    );
    const favoritesIds = Object.keys(favorites);
    return favoritesIds.map((id) => parseInt(id));
  };

  return { isHeartFilled, toggleFavorite, convertFavorites, checkIfFavorite };
};

export default useFavorite;
