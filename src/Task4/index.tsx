import { FC } from 'react';
import { useViewportSize } from './useViewportSize';

export const Task4: FC = () => {
  const { height, width } = useViewportSize();

  return (
    <>
      Width: {width}, height: {height}
    </>
  );
};
