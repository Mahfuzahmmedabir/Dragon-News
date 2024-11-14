import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayouts = () => {
  return (
    <div>
      Auth
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayouts;