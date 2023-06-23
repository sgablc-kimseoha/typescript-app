import Layout from 'components/Layout/Layout';
import { Link, Outlet } from 'react-router-dom';
import { ROUTE_HOME, ROUTE_LOGIN, ROUTE_SIGN_UP } from 'routes/routesList';

const Maintenance = () => {
  return (
    <div>
      <h1>This is Maintenace</h1>
      <nav>
        <ul>
          <li>
            <Link to={ROUTE_HOME}>Home</Link>
          </li>
          <li>
            <Link to={ROUTE_LOGIN}>Login</Link>
          </li>
          <li>
            <Link to={ROUTE_SIGN_UP}>SignUp</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Maintenance;
