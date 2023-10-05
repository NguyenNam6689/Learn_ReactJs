import Navbar from 'src/components/Navbar';
import LearnApi from 'src/components/useEffect/learn_1/learn_1';
import ScrollProgress from 'src/components/useEffect/learn_2/learn_2';
import SearchApi from 'src/components/useEffect/learn_exam/learn_exam';
import NotFound from 'src/pages/NotFound/NotFound';
import Home from 'src/pages/home/Home';
import UseEffectLayout from 'src/pages/useEffects/UseEffectLayout';
import UseStateLayout from 'src/pages/useStates/UseStateLayout';
import React from 'react';
import { useRoutes } from 'react-router-dom';

const Routers = () => {
  let routers = useRoutes([
    {
      element: <Navbar />,
      children: [
        {
          path: '/',
          element: <Home />,
          index: true,
        },
        {
          path: '/usestate',
          element: <UseStateLayout />,
          index: true,
        },
        {
          path: '/useeffects',
          children: [
            {
              index: true,
              element: <UseEffectLayout />,
            },
            {
              path: 'learn1',
              element: <LearnApi />,
            },
            {
              path: 'learn2',
              element: <ScrollProgress />,
            },
            {
              path: 'learn_exam',
              element: <SearchApi />,
            },
          ],
        },
        {
          path: '*',
          element: <NotFound />,
        },
      ],
    },
  ]);
  return routers;
};

export default Routers;
