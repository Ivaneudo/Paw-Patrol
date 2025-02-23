import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Comfingurando router
import {createBrowserRouter, RouterProvider, Route} from "react-router-dom";

// Pagina de login
import Login from './routes/Login.jsx';
// Pagina de erro
import ErrorPage from './routes/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    ErrorPage: <ErrorPage/>
  },
  {
    path: "login",
    element: <Login/>,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
