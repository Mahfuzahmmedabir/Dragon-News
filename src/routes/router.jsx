import { createBrowserRouter, Navigate } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
import CategoryNews from '../pages/CategoryNews';
import AuthLayouts from '../layouts/AuthLayouts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: '',
        element: <Navigate to={'/category/01'}></Navigate>,
      },
      {
        path: '/category/:id',
        element: <CategoryNews></CategoryNews>,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },

  {
    path: '/auth',
    element: <AuthLayouts></AuthLayouts>,
    children: [
      {
        path: '/auth/login',
        element: <h2>Login</h2>,
      },
      {
        path: '/auth/resgister',
        element: <h2>resgister</h2>,
      },
    ],
  },
]);

export default router;
