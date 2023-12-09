import Head from "../components/Helper/Head";
import CharactersIntroduction from "../components/Introduction/CharactersIntroduction";
import CharactersOverview from "../components/Overview/CharactersOverview";

const Characters = () => {
  return (
    <>
      <Head
        title="Personagens"
        description="Página de personagens do site Rick and Morty."
      />
      
      <CharactersIntroduction />
      <CharactersOverview />
    </>
  );
};

export default Characters;
