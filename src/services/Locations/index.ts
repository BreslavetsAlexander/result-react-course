import locations from '../../../location.json';
import { ILocationsServise } from './types';

export const LocationsServise: ILocationsServise = {
  getLocations: (payload) => {
    if (!payload?.sort?.created) {
      return Promise.resolve(locations);
    }

    const sorted = [...locations].sort((a, b) => {
      const aCreated = new Date(a.created).getTime();
      const bCreated = new Date(b.created).getTime();

      if (payload.sort?.created === 'desc') {
        return aCreated - bCreated;
      }

      return bCreated - aCreated;
    });

    return Promise.resolve(sorted);
  },

  getLocationById: (id) => {
    const location = locations.find((item) => {
      return item.id === id;
    });

    if (!location) {
      return Promise.reject('Location not found');
    }

    return Promise.resolve(location);
  },
};
