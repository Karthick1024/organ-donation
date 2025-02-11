import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {
    Homelayout,
    LandingPage,
    LoginForm,
    Register,
    Userregistration,
    Dashboard,
    Userprofile,
    Donationhistory,
    OrganRequestForm
} from './pages';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Homelayout />,
      children: [
        {
          index: true,
          element: <LandingPage />,
        },
        {
          path: 'login',
          element: <LoginForm />,
        },
        {
          path: 'userregister',
          element: <Userregistration />,
        },
      ],
    },
    {
      path: 'dashboard',
      element: <Dashboard />,
      children: [
        {
          index: true, // This will be the default route
          element: <Userprofile />, // This renders by default for /dashboard
        },
        {
          path: 'profile',
          element: <Userprofile />,
        },
        {
          path: 'register',
          element: <Register />,
        },
        {
          path: 'history',
          element: <Donationhistory />,
        },
        {
          path:'organrequest',
          element:<OrganRequestForm/>
        }
      ],
    },
  ]
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
