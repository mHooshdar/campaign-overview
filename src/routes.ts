import { lazy } from 'react';

const routes = [
  {
    component: lazy(() => import('@pages/Overview')),
    to: '/',
    title: 'Overview',
  },
  {
    component: lazy(() => import('@pages/Campaign')),
    to: '/campaign',
    title: 'Campaigns',
  },
  {
    component: lazy(() => import('@pages/Campaign/CreateCampaign')),
    to: '/campaign/create',
    title: 'Create',
  },
  {
    component: lazy(() => import('@pages/404')),
    to: '*',
  },
];

export default routes;
