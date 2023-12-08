interface CharacterProps {
  results: [];
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  gender: string;
  info: { count: number; pages: number; next: string; prev: string };
}

interface EpisodeProps {
  results: [];
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  info: { count: number; pages: number; next: string; prev: string };
}

interface LocationProps {
  results: [];
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  info: { count: number; pages: number; next: string; prev: string };
}