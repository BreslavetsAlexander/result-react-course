import { LocationApiModel, SortOrder } from '../../definitions';

export interface LocationsListPayload {
  sort?: {
    created: SortOrder;
  };
}

export interface ILocationsServise {
  getLocations: (payload?: LocationsListPayload) => Promise<LocationApiModel[]>;
  getLocationById: (id: LocationApiModel['id']) => Promise<LocationApiModel>;
}
