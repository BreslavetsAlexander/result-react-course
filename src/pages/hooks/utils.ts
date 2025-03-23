import { SortOrder } from '../../definitions';

export const getSortOrder = (prev: SortOrder): SortOrder => {
  if (!prev) {
    return 'asc';
  }

  if (prev === 'asc') {
    return 'desc';
  }

  return undefined;
};
