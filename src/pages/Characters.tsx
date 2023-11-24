import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Heart from "../components/Svg/Heart";

interface CharacterProps {
  id: number;
  name: string;
  status: string;
  species: string;
  location: {
    name: string;
  };
  origin: {
    name: string;
  };
  image: string;
  episode: [];
}

const Characters = () => {
  const { id } = useParams();

  const character = useFetch<CharacterProps>(
    `https://rickandmortyapi.com/api/character/${id}`,
  );

  /*
  {character.data &&
    [character.data].map((character: CharacterProps) => (
      <div key={character.id}>
        <img src={character.image} alt={character.name} />
        <h1>{character.name}</h1>
        <p>{character.status}</p>
        <p>{character.species}</p>
        <p>{character.location.name}</p>
      </div>
    ))}
  */

  return (
    <div>
      <div>
        <div>
          <img src="" alt="" />
        </div>

        <div>
          <div>
            <h1>Nome</h1>
            <Heart size="medium" />
          </div>

          <div>
            <img src="" alt="" />
            <p>Participou...</p>
          </div>

          <div>
            <p>
              <span>
                <img src="" alt="" />
              </span>
              Vivo
            </p>

            <p>
              <span>
                <img src="" alt="" />
              </span>
              Humano
            </p>

            <p>
              <span>
                <img src="" alt="" />
              </span>
              Male
            </p>
          </div>
        </div>

        <div>
          <p>Componente a fazer</p>
        </div>
      </div>

      <div>
        <p>Teste</p>
      </div>
    </div>
  );
};

export default Characters;
