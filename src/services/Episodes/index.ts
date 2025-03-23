import episodes from '../../../episode.json';
import { IEpisodesServise } from './types';

export const EpisodesServise: IEpisodesServise = {
  getEpisodes: (payload) => {
    if (!payload?.sort?.created) {
      return Promise.resolve(episodes);
    }

    const sorted = [...episodes].sort((a, b) => {
      const aCreated = new Date(a.created).getTime();
      const bCreated = new Date(b.created).getTime();

      if (payload.sort?.created === 'desc') {
        return aCreated - bCreated;
      }

      return bCreated - aCreated;
    });

    return Promise.resolve(sorted);
  },

  getEpisodeById: (id) => {
    const episode = episodes.find((item) => {
      return item.id === id;
    });

    if (!episode) {
      return Promise.reject('Episode not found');
    }

    return Promise.resolve(episode);
  },
};
