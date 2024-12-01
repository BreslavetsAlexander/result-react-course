import { useEffect, useRef, useState, useCallback } from 'react';

export const useHover = <TElement extends HTMLElement>() => {
  const [hovered, setHovered] = useState<boolean>(false);
  const ref = useRef<TElement>(null);

  useEffect(() => {
    const onMouseEnter = useCallback(() => {
      setHovered(true);
    }, []);

    const onMouseLeave = useCallback(() => {
      setHovered(false);
    }, []);

    ref.current?.addEventListener('mouseenter', onMouseEnter);
    ref.current?.addEventListener('mouseleave', onMouseLeave);

    return () => {
      ref.current?.removeEventListener('mouseenter', onMouseEnter);
      ref.current?.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return {
    hovered,
    ref,
  };
};
