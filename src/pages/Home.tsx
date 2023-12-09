import Head from "../components/Helper/Head";
import HomeIntroduction from "../components/Introduction/HomeIntroduction";
import HomePreview from "../components/Preview/HomePreview";

const Home = () => {
  return (
    <>
      <Head
        title="Início"
        description="Home do site Rick and Morty, na qual você pode ver os personagens, locais e episódios da série."
      />

      <HomeIntroduction />
      <HomePreview />
    </>
  );
};

export default Home;
