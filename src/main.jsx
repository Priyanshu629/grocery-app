import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Login from './compoenets/Login.jsx'
import SignUp from './compoenets/SignUp.jsx'
import { UserProvider } from './context/userContext.jsx'
import Home from './compoenets/Home.jsx'
import DashBoard from './compoenets/DashBoard.jsx'
import Body from './compoenets/Body.jsx'
import Profile from './compoenets/Profile.jsx'
import Settings from './compoenets/Settings.jsx'

const appRouter= createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
      path:'/',
      element:<Login/>
    },
      {
      path:'/signup',
      element:<SignUp/>
    },
     
      {
      path:'/body',
      element:<Body/>,
      children:[
        {
          path:'/body/dashboard',
          element:<DashBoard/>
        },
        {
          path:'/body/home',
          element:<Home/>
        },
        {
          path:'/body/profile',
          element:<Profile/>
        },
        {
          path:'/body/settings',
          element:<Settings/>
        },
      ]

    },

      
  ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <UserProvider>
 <RouterProvider router={appRouter}>
    <App />
    </RouterProvider>
    </UserProvider>
  </StrictMode>,
)
