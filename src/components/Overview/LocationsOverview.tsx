import styles from "./Overview.module.scss";
import useFetch from "../../hooks/useFetch";
import usePagination from "../../hooks/usePagination";
import Title from "../Title/Title";
import Planet from "../Svg/Planet";
import CardLocation from "../Cards/CardLocation";
import SkeletonCardLocation from "../Skeleton/SkeletonCardLocation";

const LocationOverview = () => {
  const locations = useFetch<LocationProps>(
    `https://rickandmortyapi.com/api/location`,
  );

  const pages = locations.data?.info.pages;

  const { page, Controls } = usePagination(1, pages);

  const locationsPages = useFetch<LocationProps>(
    `https://rickandmortyapi.com/api/location?page=${page}`,
  );

  return (
    <section className={`${styles.locationsOverview} container`}>
      <Title type="secondary" componentSvg={<Planet size="huge" />}>
        Mais localizações
      </Title>

      {locations.error ? (
        <p className={styles.error}>{locations.error}</p>
      ) : (
        <>
          <div className={styles.cards}>
            {locationsPages.loading
              ? Array.from({ length: 12 }).map((_, index) => (
                  <SkeletonCardLocation key={index} />
                ))
              : locationsPages.data?.results?.map((location: LocationProps) => (
                  <CardLocation
                    key={location.id}
                    id={location.id}
                    name={location.name}
                    type={location.type}
                  />
                ))}
          </div>
          <Controls />
        </>
      )}
    </section>
  );
};

export default LocationOverview;
