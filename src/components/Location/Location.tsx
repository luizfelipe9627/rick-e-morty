import useFetch from "../../hooks/useFetch";
import useRandomNumbers from "../../hooks/useRandomNumbers";
import CardLocation from "../Cards/CardLocation";
import Title from "../Title/Title1";
import styles from "./Location.module.scss";

interface LocationProps {
  id: number;
  name: string;
  type: string;
}

const Location = () => {
  const randomNumbers = useRandomNumbers(5, 126);
  const locations = useFetch<LocationProps[]>(
    `https://rickandmortyapi.com/api/location/[${randomNumbers.join(",")}]`,
  );

  return (
    <section className={`${styles.location} container`}>
      <Title label="Ver todos" to="locations/1">
        Localizações
      </Title>

      <div className={styles.cards}>
        {locations.loading && <p>Carregando...</p>}

        {locations.data &&
          locations.data.map((location) => (
            <CardLocation
              key={location.id}
              id={location.id}
              name={location.name}
              type={location.type}
            />
          ))}
      </div>
    </section>
  );
};

export default Location;
