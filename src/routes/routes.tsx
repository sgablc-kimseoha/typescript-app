import { ROUTE_ROOT, ROUTE_HOME, ROUTE_LOGIN } from 'routes/routesList';

import Maintenance from 'pages/Maintenance';
import Home from 'pages/Home';
import Login from 'pages/Login';

export interface IRoute {
  path: string;
  element: React.ReactElement;
  withAuth: boolean;
  withLayout: boolean;
}

const commonRoutes: IRoute[] = [
  {
    path: ROUTE_ROOT,
    element: <Maintenance />,
    withAuth: false,
    withLayout: true,
  },
  {
    path: ROUTE_LOGIN,
    element: <Login />,
    withAuth: false,
    withLayout: true,
  },

  {
    path: ROUTE_HOME,
    element: <Home />,
    withAuth: true,
    withLayout: true,
  },
];

export default commonRoutes;
