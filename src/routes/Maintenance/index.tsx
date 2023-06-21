import Layout from 'components/Layout/Layout';
import { Outlet } from 'react-router-dom';

const Maintenance = () => {
  return (
    <div>
      <Outlet />
      <Layout />
    </div>
  );
};

export default Maintenance;
