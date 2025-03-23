import { FC } from 'react';
import { useRoutes } from 'react-router';
import { ROUTER } from './constants/router';
import { Navigation } from './components/Navigation';

export const App: FC = () => {
  const routes = useRoutes(ROUTER);

  return (
    <div>
      <Navigation />
      {routes}
    </div>
  );
};
