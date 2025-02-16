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
    OrganRequestForm,
    Faq,
    DoctorDashboard,
    Appointments,
    PatientPage,
    OrganRequest,
    Operationshedule,
    
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
          index: true,
          element: <Userprofile />, 
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
        },{
          path:'faq',
          element:<Faq/>
        }
      ],
    },
    {
      path:'doctordashboard',
      element:<DoctorDashboard/>,
      children:[
        {
          index: true,  
          element: <Appointments/>
        },
      
        {
          path: 'appointments',
          element: <Appointments />,
        },{
          path:'patients',
          element:<PatientPage/>
        },{
          path:'organrequest',
          element:<OrganRequest/>
        },{
          path:'operationschedule',
          element:<Operationshedule/>
        }
        
      ]
    }
  ]
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
