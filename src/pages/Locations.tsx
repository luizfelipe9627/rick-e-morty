import Head from "../components/Helper/Head";
import LocationIntroduction from "../components/Introduction/LocationsIntroduction";
import LocationOverview from "../components/Overview/LocationsOverview";

const Locations = () => {
  return (
    <>
      <Head
        title="Localizações"
        description="Página de localizações do site Rick and Morty."
      />
      <LocationIntroduction />
      <LocationOverview />
    </>
  );
};

export default Locations;
