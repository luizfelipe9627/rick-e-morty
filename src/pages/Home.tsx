import HomeIntroduction from "../components/Introduction/HomeIntroduction";
import CharactersPreview from "../components/Preview/CharactersPreview";
import EpisodesPreview from "../components/Preview/EpisodesPreview";
import Location from "../components/Location/Location";

const Home = () => {
  return (
    <>
      <HomeIntroduction />
      <CharactersPreview />
      <EpisodesPreview />
      <Location />
    </>
  );
};

export default Home;
