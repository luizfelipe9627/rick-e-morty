import useFetch from "../../hooks/useFetch";
import useRandomNumbers from "../../hooks/useRandomNumbers";
import CardLocation from "../Cards/CardLocation";
import SkeletonCardLocation from "../Skeleton/SkeletonCardLocation";
import Title from "../Title/Title";
import styles from "./Preview.module.scss";

const LocationsPreview = () => {
  const randomNumbers = useRandomNumbers(6, 126);
  const locations = useFetch<LocationProps[]>(
    `https://rickandmortyapi.com/api/location/[${randomNumbers.join(",")}]`,
  );

  return (
    <div className={`${styles.locationsPreview} container`}>
      <Title type="primary" label="Ver todos" to="locations/1">
        Localizações
      </Title>

      <div className={styles.cards}>
        {locations.loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <SkeletonCardLocation key={index} />
            ))
          : locations.data?.map((location) => (
              <CardLocation
                key={location.id}
                id={location.id}
                name={location.name}
                type={location.type}
              />
            ))}
        {locations.error && <p className={styles.error}>{locations.error}</p>}
      </div>
    </div>
  );
};

export default LocationsPreview;
