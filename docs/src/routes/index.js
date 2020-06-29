import React from 'react';

// General
const Homepage = React.lazy(() => import('../pages/Homepage'));

// General
const Docs = React.lazy(() => import('../pages/Docs'));

const generalRoutes = {
  path: '/',
  name: 'Home',
  header: 'Home',
  children: [
    {
      path: '/',
      name: 'Home',
      // icon: 'question-circle',
      component: Homepage
    }
  ]
}

const docRoutes = {
  path: '/docs',
  name: 'Docs',
  header: 'Quizee',
  children: [
    {
      path: '/docs',
      name: 'Docs',
      // icon: 'question-circle',
      component: Docs
    }
  ]
};


const flatten = routes => {
  let flatRoutes = [];

  routes = routes || [];
  routes.forEach(item => {
    flatRoutes.push(item);

    if (typeof item.children !== 'undefined') {
      flatRoutes = [...flatRoutes, ...flatten(item.children)];
    }
  });
  return flatRoutes;
};

const allRoutes = [docRoutes, generalRoutes];
const flattenedRoutes = flatten(allRoutes);

export {allRoutes, flattenedRoutes, docRoutes};


