import { SortOrder } from '../../definitions';

export type UseSortOrder = (initialValue: SortOrder) => [SortOrder, () => SortOrder];
