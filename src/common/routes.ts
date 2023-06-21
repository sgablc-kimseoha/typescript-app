import { ROUTE_ROOT, ROUTE_HOME, ROUTE_LOGIN } from 'constants/routeList';

import Maintenance from 'routes/Maintenance';
import Home from 'routes/Home';
import Login from 'routes/Login';

const routes = [
  {
    id: 0,
    path: ROUTE_LOGIN,
    label: 'LOGIN',
    Component: Login,
    isAuth: false,
  },
  {
    id: 1,
    path: ROUTE_HOME,
    label: 'HOME',
    Component: Home,
    isAuth: true,
  },
];

export default routes;
