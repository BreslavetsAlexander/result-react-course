import { useState } from 'react';
import { UseToggle } from './types';

const useBooleanToggle = (): UseToggle<boolean> => {
  const [value, setValue] = useState<boolean>(false);

  const toggle = () => {
    setValue((prev) => !prev);
  };

  return [value, toggle];
};

const useArrayToggle = <TValue>(values: TValue[]): UseToggle<TValue> => {
  const [value, setValue] = useState<TValue>(values[0]);
  const [arrayIndex, setArrayIndex] = useState<number>(0);

  const toggle = (newValue?: TValue) => {
    if (typeof newValue !== 'undefined') {
      const valueIndex = values.findIndex((item) => item === newValue);

      if (valueIndex === -1) {
        throw new Error('unable to find element in array');

        return;
      }

      setValue(newValue);
      setArrayIndex(valueIndex);

      return;
    }

    let newArrayIndex = arrayIndex + 1;

    if (newArrayIndex > values.length - 1) {
      newArrayIndex = 0;
    }

    setValue(values[newArrayIndex]);
    setArrayIndex(newArrayIndex);
  };

  return [value, toggle];
};

export const useToggle = <TValue>(values?: TValue[]): UseToggle<TValue> => {
  // разделил на два хука
  // возникла проблема с useBooleanToggle, пришлось приведение сделать
  return Array.isArray(values) ? useArrayToggle(values) : (useBooleanToggle() as UseToggle<TValue>);
};
