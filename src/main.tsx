import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter, RouterProvider
} from "react-router-dom"
import './index.css'
import Login from './Pages/Login'
import IndexPage from './Pages/Index'
import Services from './Pages/Services'
import Containers from './Pages/Containers'
import Console from './Pages/Console'

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login/>
  }, 
  {
    path: "/",
    element: <IndexPage/>
  },
  {
    path: "/services",
    element: <Services/>
  },
  {
    path: "/containers",
    element: <Containers/>
  },
  {
    path: "/console",
    element: <Console/>
  }

])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
)
