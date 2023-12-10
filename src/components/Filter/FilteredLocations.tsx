import React from "react";
import styles from "./Filtered.module.scss";
import useFetch from "../../hooks/useFetch";
import CardLocation from "../Cards/CardLocation";
import SkeletonCardLocation from "../Skeleton/SkeletonCardLocation";

interface FilteredLocationsProps {
  inputValue: string;
}

const FilteredLocations = ({ inputValue }: FilteredLocationsProps) => {
  const [page, setPage] = React.useState(1);
  const [locationsList, setLocationsList] = React.useState<LocationProps[]>([]);
  const locations = useFetch<LocationProps>(
    `https://rickandmortyapi.com/api/location/?page=${page}`,
  );
  const totalPages = locations.data?.info.pages || 1;

  React.useEffect(() => {
    if (locations.data && locations.data.results) {
      setLocationsList((prevLocations) => [
        ...prevLocations,
        ...(locations.data?.results as LocationProps[]),
      ]);
    }
  }, [locations.data]);

  React.useEffect(() => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [page, totalPages]);

  const filteredLocations = locationsList.filter((location) =>
    location.name.toLowerCase().includes(inputValue.trim().toLowerCase()),
  );

  const isLastPage = page === totalPages;

  return locations.error ? (
    <p className={styles.error}>{locations.error}</p>
  ) : filteredLocations.length > 0 ? (
    <div className="container">
      <div className={styles.cardsLocations}>
        {!isLastPage
          ? Array.from({ length: 20 }).map((_, index) => (
              <SkeletonCardLocation key={index} />
            ))
          : isLastPage &&
            filteredLocations.map((location: LocationProps) => (
              <CardLocation
                key={location.id}
                id={location.id}
                name={location.name}
                type={location.type}
              />
            ))}
      </div>
    </div>
  ) : (
    <>
      <h1 className={styles.title}>Nenhuma localização encontrada.</h1>
      <p>
        Para retornar às categorias iniciais, basta clicar novamente no filtro
        "Localizações".
      </p>
    </>
  );
};

export default FilteredLocations;
