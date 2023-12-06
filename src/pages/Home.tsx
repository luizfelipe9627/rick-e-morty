import HomeIntroduction from "../components/Introduction/HomeIntroduction";
import CharactersPreview from "../components/Preview/CharactersPreview";
import EpisodesPreview from "../components/Preview/EpisodesPreview";
import LocationsPreview from "../components/Preview/LocationsPreview";
import Search from "../components/SearchWithFilter/SearchWithFilter";

const Home = () => {
  return (
    <>
      <HomeIntroduction />
      <Search />
      <CharactersPreview />
      <EpisodesPreview />
      <LocationsPreview />
    </>
  );
};

export default Home;
