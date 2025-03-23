import { EpisodeApiModel, SortOrder } from '../../definitions';

export interface EpisodesListPayload {
  sort?: {
    created: SortOrder;
  };
}

export interface IEpisodesServise {
  getEpisodes: (payload?: EpisodesListPayload) => Promise<EpisodeApiModel[]>;
  getEpisodeById: (id: EpisodeApiModel['id']) => Promise<EpisodeApiModel>;
}
