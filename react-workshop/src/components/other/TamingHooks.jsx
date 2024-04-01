import React from 'react';
import { Outlet } from 'react-router-dom';

const TamingHooks = () => {
  return (
    <div>
      <h1>TamingHooks</h1>
      <Outlet />
    </div>
  );
};

export default TamingHooks;
