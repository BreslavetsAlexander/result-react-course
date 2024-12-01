import { useState } from 'react';
import { UseLocalStorage, SetItem, LocalStorageReturnValue } from './types';

const getLocalStorageValue = (key: string): LocalStorageReturnValue => {
  const value = localStorage.getItem(key);

  if (typeof value !== 'string') {
    return null;
  }

  return JSON.parse(value);
};

export const useLocalStorage: UseLocalStorage = (key) => {
  const [value, setValue] = useState<LocalStorageReturnValue>(() => getLocalStorageValue(key));

  const setItem: SetItem = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  const removeItem = () => {
    setValue(null);
    localStorage.removeItem(key);
  };

  return [value, { setItem, removeItem }];
};
