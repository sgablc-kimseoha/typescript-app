import React from 'react';
import { Link, useParams, useRevalidator } from 'react-router-dom';
import { ROUTE_HOME, ROUTE_LOGIN } from 'constants/routeList';

import StyledLayout from './StyledLayout';

const Layout = ({ children }: React.PropsWithChildren) => {
  // let revalidator = useRevalidator();

  return (
    <StyledLayout>
      <h1>Data Router Example</h1>
      <nav>
        <ul>
          <li>
            <Link to={ROUTE_HOME}>Home</Link>
          </li>
          <li>
            <Link to={ROUTE_HOME}>Home</Link>
          </li>
        </ul>
      </nav>
      {children}
    </StyledLayout>
  );
};

export default Layout;
