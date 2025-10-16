import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Root.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import { ToastContainer } from 'react-toastify'
import SignIn from './SignIn.jsx'
import Signup from './Signup.jsx'
const router=createBrowserRouter([
  {
    path:'/',
    Component: Root,
    children:[
      {
        index: true,
        Component: Home
      },
      {
        path:'/about',
        Component: About
      },
      {
        path: '/signin',
        Component: SignIn
      },
      {
        path:'/signup',
        Component: Signup
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer></ToastContainer>
  </StrictMode>,
)
