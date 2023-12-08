import React from "react";

interface UseViewedProps {
  id: number;
  localStorageName: string;
}

const useViewed = ({ id, localStorageName }: UseViewedProps) => {
  const [isCardClicked, setCardClicked] = React.useState<boolean>(() => {
    const viewedCards = JSON.parse(
      localStorage.getItem(localStorageName) || "[]",
    );
    return viewedCards.includes(id);
  });

  const handleCardClick = () => {
    if (!isCardClicked) {
      const viewedCards = JSON.parse(
        localStorage.getItem(localStorageName) || "[]",
      );
      const updatedViewedCards = [...viewedCards, id];
      localStorage.setItem(
        localStorageName,
        JSON.stringify(updatedViewedCards),
      );
      setCardClicked(true);
    }
  };

  return { isCardClicked, handleCardClick };
};

export default useViewed;
