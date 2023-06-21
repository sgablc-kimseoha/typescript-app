import React from 'react';
import StyledLayout from './StyledLayout';

const Layout = ({ children }: React.PropsWithChildren) => {
  return <StyledLayout>{children}</StyledLayout>;
};

export default Layout;
