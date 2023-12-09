import Head from "../components/Helper/Head";
import EpisodesIntroduction from "../components/Introduction/EpisodesIntroduction";
import EpisodesOverview from "../components/Overview/EpisodesOverview";

const Episodes = () => {
  return (
    <>
      <Head
        title="Episódios"
        description="Página de episódios do site Rick and Morty."
      />

      <EpisodesIntroduction />
      <EpisodesOverview />
    </>
  );
};

export default Episodes;
