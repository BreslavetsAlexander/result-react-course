import { FC } from 'react';
import { useHover } from './useHover';

export const Task3: FC = () => {
  const { hovered, ref } = useHover<HTMLDivElement>();

  return <div ref={ref}>{hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}</div>;
};
