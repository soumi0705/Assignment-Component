/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import AppRoutes from './AppRoutes';
import Redirection from '../pages/Redirection';
// import LeaderBoard from '../pages/LeaderBoard/index';
import Page from '../pages/Page-Component/index';

import HealthCheck from '../healthCheck';
interface config {
  path: string;
  component: React.FC;
}

const pconfig: config[] = [
  {
    path: '/',
    component: Page, //Redirection
  },

  {
    path: '/healthCheck',
    component: HealthCheck,
  },
];

const Routes = () => {
  return <AppRoutes routeData={pconfig} />;
};

export default Routes;
