import characters from '../../../characters.json';
import { ICharactersServise } from './types';

export const CharactersServise: ICharactersServise = {
  getCharacters: (payload) => {
    if (!payload?.sort?.created) {
      return Promise.resolve(characters);
    }

    const sorted = [...characters].sort((a, b) => {
      const aCreated = new Date(a.created).getTime();
      const bCreated = new Date(b.created).getTime();

      if (payload.sort?.created === 'desc') {
        return aCreated - bCreated;
      }

      return bCreated - aCreated;
    });

    return Promise.resolve(sorted);
  },

  getCharacterById: (id) => {
    const character = characters.find((item) => {
      return item.id === id;
    });

    if (!character) {
      return Promise.reject('Character not found');
    }

    return Promise.resolve(character);
  },
};
