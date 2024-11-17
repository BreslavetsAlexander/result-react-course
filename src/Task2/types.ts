type LocalStorageSetValue = string;

export type LocalStorageReturnValue = LocalStorageSetValue | null;

export type SetItem = (value: LocalStorageSetValue) => void;

export type UseLocalStorage = (key: string) => [
  value: LocalStorageReturnValue,
  {
    setItem: SetItem;
    removeItem: () => void;
  },
];
