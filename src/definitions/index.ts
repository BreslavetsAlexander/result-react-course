export type SortOrder = 'asc' | 'desc' | undefined;

export interface CharacterApiModel {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  created: string;
}

export interface EpisodeApiModel {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  created: string;
}

export interface LocationApiModel {
  id: number;
  name: string;
  type: string;
  dimension: string;
  created: string;
}
