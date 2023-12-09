import Head from "../components/Helper/Head";
import FavoritesIntroduction from "../components/Introduction/FavoritesIntroduction";
import FavoritesOverview from "../components/Overview/FavoritesOverview";

const Favorites = () => {
  return (
    <>
      <Head
        title="Favoritos"
        description="Página de favoritos do site Rick and Morty."
      />

      <FavoritesIntroduction />
      <FavoritesOverview />
    </>
  );
};

export default Favorites;
