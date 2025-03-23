import { RouteObject } from 'react-router';
import { Home } from '../pages/Home';
import { Characters } from '../pages/Characters';
import { Character } from '../pages/Character';
import { Locations } from '../pages/Locations';
import { Location } from '../pages/Location';
import { Episodes } from '../pages/Episodes';
import { Episode } from '../pages/Episode';
import { NotFound } from '../pages/NotFound';

export const ROUTES = {
  HOME: '/',
  CHARACTERS: '/characters',
  CHARACTER: '/characters/:id',
  LOCATIONS: '/locations',
  LOCATION: '/locations/:id',
  EPISODES: '/episodes',
  EPISODE: '/episode/:id',
  NOT_FOUND: '/*',
};

export const ROUTER: RouteObject[] = [
  {
    path: ROUTES.HOME,
    element: <Home />,
  },
  {
    path: ROUTES.CHARACTERS,
    element: <Characters />,
  },
  {
    path: ROUTES.CHARACTER,
    element: <Character />,
  },
  {
    path: ROUTES.LOCATIONS,
    element: <Locations />,
  },
  {
    path: ROUTES.LOCATION,
    element: <Location />,
  },
  {
    path: ROUTES.EPISODES,
    element: <Episodes />,
  },
  {
    path: ROUTES.EPISODE,
    element: <Episode />,
  },
  {
    path: ROUTES.NOT_FOUND,
    element: <NotFound />,
  },
];
