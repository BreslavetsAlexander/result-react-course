import { useEffect, useState } from 'react';
import { ScrollPosition, ScrollTo, UseWindowScroll } from './types';
import { DEFAULT_SCROLL_POSITION } from './constants';

export const useWindowScroll = (): UseWindowScroll => {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>(DEFAULT_SCROLL_POSITION);

  useEffect(() => {
    const onScroll = () => {
      setScrollPosition({
        x: window.scrollX,
        y: window.scrollY,
      });
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const scrollTo: ScrollTo = (position) => {
    window.scrollTo({
      top: position.y,
      left: position.x,
    });
  };

  return [scrollPosition, scrollTo];
};
