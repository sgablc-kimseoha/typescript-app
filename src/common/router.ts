import { createBrowserRouter } from 'react-router-dom';
import routes from './routes';

const router = createBrowserRouter(
  routes.map((route) => {
    if (route.isAuth) {
      return {
        path: route.path,
        Component: route.Component,
      };
    } else {
      return {
        path: route.path,
        Component: route.Component,
      };
    }
  }),
);

export default router;
