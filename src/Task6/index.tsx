import { FC } from 'react';
import { useToggle } from './useToggle';

export const Task6: FC = () => {
  const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal']);

  return <button onClick={() => toggle()}>{value}</button>;
};
