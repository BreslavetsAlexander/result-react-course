import { useState, useRef } from 'react';
import { SortOrder } from '../../definitions';
import { UseSortOrder } from './types';
import { getSortOrder } from './utils';

export const useSortOrder: UseSortOrder = (initialValue) => {
  const [sortOrder, setSortOrder] = useState<SortOrder>(initialValue);
  const prevSortOrder = useRef<SortOrder>(sortOrder);

  const toggleSortOrder = () => {
    prevSortOrder.current = sortOrder;

    const newValue = getSortOrder(prevSortOrder.current);

    setSortOrder(newValue);

    return newValue;
  };

  return [sortOrder, toggleSortOrder];
};
