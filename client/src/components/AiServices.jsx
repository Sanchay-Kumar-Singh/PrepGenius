import React from 'react';
import { Outlet } from 'react-router-dom';

const AiServices = () => {
  return (
    <div>
      Ai services
      <Outlet/>
    </div>
  );
}

export default AiServices;
