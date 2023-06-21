import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTE_HOME, ROUTE_LOGIN } from 'constants/routeList';
import Home from 'routes/Home';
import Login from 'routes/Login';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE_HOME} element={<Home />} />
        <Route path={ROUTE_LOGIN} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
