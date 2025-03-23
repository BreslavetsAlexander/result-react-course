import { CharacterApiModel, SortOrder } from '../../definitions';

export interface CharactersListPayload {
  sort?: {
    created: SortOrder;
  };
}

export interface ICharactersServise {
  getCharacters: (payload?: CharactersListPayload) => Promise<CharacterApiModel[]>;
  getCharacterById: (id: CharacterApiModel['id']) => Promise<CharacterApiModel>;
}
