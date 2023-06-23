import React from 'react';
import StyledLayout from './StyledLayout';

const Layout = ({ children }: React.PropsWithChildren) => {
  // let revalidator = useRevalidator();

  return <StyledLayout>{children}</StyledLayout>;
};

export default Layout;
