import { useEffect, useState } from 'react';
import { useWindowEvent } from '../reusables';

export const useViewportSize = () => {
  const [width, setWidth] = useState<number>();
  const [height, setHeight] = useState<number>();

  const update = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => update(), []);

  useWindowEvent('resize', update);

  return { width, height };
};
