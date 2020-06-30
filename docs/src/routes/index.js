import React from 'react';

// General
const Homepage = React.lazy(() => import('../pages/Homepage'));

// Docs
const GettingStarted = React.lazy(() => import('../pages/Docs/GettingStarted'));
const Components = React.lazy(() => import('../pages/Docs/Components'));
const Validators = React.lazy(() => import('../pages/Docs/Validators'));

const generalRoutes = {
  path: '/',
  name: 'Home',
  header: 'Home',
  children: [
    {
      path: '/',
      name: 'Home',
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
      path: '/docs/getting-started',
      name: 'Getting Started',
      // icon: 'question-circle',
      component: GettingStarted
    },
    {
      path: '/docs/components',
      name: 'Components',
      // icon: 'question-circle',
      component: Components
    },
    {
      path: '/docs/validators',
      name: 'Validators',
      // icon: 'question-circle',
      component: Validators
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


