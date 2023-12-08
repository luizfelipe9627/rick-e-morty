import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Heart from "../Svg/Heart";
import Planet from "../Svg/Planet";
import Smiley from "../Svg/Smiley";
import styles from "./LocationsIntroduction.module.scss";
import useTheme from "../../hooks/useTheme";
import Cube from "../Svg/Cube";
import SkeletonLocation from "../Skeleton/SkeletonLocation";
import useFavorite from "../../hooks/useFavorite";

const LocationsIntroduction = () => {
  const { theme } = useTheme();
  const { id } = useParams();

  const { checkIfFavorite, toggleFavorite } = useFavorite({
    id: Number(id),
    localStorageName: "favoritesLocations",
  });

  const location = useFetch<LocationProps>(
    `https://rickandmortyapi.com/api/location/${id}`,
  );

  return (
    <section className={styles.locationsIntroduction}>
      {location.loading ? (
        <SkeletonLocation />
      ) : (
        location.data && (
          <>
            <div className={`${styles.wrapper} container`}>
              <span className={styles.icon}>
                <Planet size="huge" />
              </span>

              <div className={styles.title}>
                <h1>{location.data?.name}</h1>
                <Heart
                  size="huge"
                  fill={checkIfFavorite()}
                  onClick={toggleFavorite}
                />
              </div>

              <div className={styles.infos}>
                <div className={styles.type}>
                  <Planet size="medium" />
                  <p>{location.data?.type}</p>
                </div>

                <div className={styles.location}>
                  <Cube size="medium" />
                  <p>{location.data?.dimension}</p>
                </div>
              </div>

              <div className={styles.statistic}>
                {theme === "dark" ? (
                  <Smiley size="medium" theme="dark" />
                ) : (
                  <Smiley size="medium" />
                )}
                <p>
                  {location.data?.residents.length}{" "}
                  {location.data && location.data?.residents.length > 1
                    ? "Personagens"
                    : "Personagem"}{" "}
                  localizados aqui
                </p>
              </div>
            </div>
          </>
        )
      )}
    </section>
  );
};

export default LocationsIntroduction;
