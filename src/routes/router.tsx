import { Navigate, createBrowserRouter } from 'react-router-dom';
import { useAuthContext } from 'auth/AuthProvider';

import routes, { IRoute } from 'routes/routes';
import { ROUTE_LOGIN } from 'routes/routesList';
import Layout from 'components/Layout/Layout';

const PrivateRoute = (route: IRoute) => {
  const { isAuth, user, userType } = useAuthContext();
  return !isAuth ? <Navigate to={ROUTE_LOGIN} /> : <Route {...route} />;
};

const Route = ({ element, withLayout }: IRoute) => {
  return withLayout ? <Layout>{element}</Layout> : element;
};

const router = createBrowserRouter(
  routes.map((route) => {
    if (route.withAuth) {
      return {
        path: route.path,
        element: <PrivateRoute {...route} />,
      };
    } else {
      return {
        path: route.path,
        element: <Route {...route} />,
      };
    }
  }),
);

export default router;
