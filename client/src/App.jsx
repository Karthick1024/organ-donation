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
    AdminDashboard,
    DonorsTable,
    DoctorsTable,
    DoctorSignup,
    Accountrequest,
    
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
        },{
          path:'doctor-signup',
          element:<DoctorSignup/>
        }
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
        },
       
      ]
    },{
      path:'admindashboard',
      element:<AdminDashboard/>,
      children:[
        {
          index:true,
          element:<DonorsTable/>
        },
        {
          path:'donors-table',
          element:<DonorsTable/>
        },{
          path:'doctorstable',
          element:<DoctorsTable/>,

          
        },{
          path:'account-request',
          element:<Accountrequest/>
        }
      ]
    }
  ]
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
