import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from './Root';
import ErrorPage from '../ErrorPage/ErrorPage';
import Home from '../Option/Home';
import App from '../App';
import Apps from '../Option/Apps';
import Installation from '../Option/Installation';
import AppsDetails from '../Option/AppsDetails';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            path: "/",
            loader:()=>fetch('appData.json'),
            Component: Home,
        },
        {
            path:'/apps',
            loader:()=>fetch("appMoreData.json"),
            Component: Apps,
        },
        {
            path: '/installation',
            Component: Installation,
        },
        {
            path: '/app/:id',
             loader:()=>fetch('appData.json'),
            Component: AppsDetails,
        },
        {
            path: '/moreapp/:id',
            loader:()=>fetch("appMoreData.json"),
            Component: AppsDetails,
        }
    ]
  },
]);

