import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TelaLogin from '../src/pages/Login/Login.jsx'
import HomeAdmin from '../src/pages/home-admin'
import HomeBalconista from '../src/pages/home-balconista'
import HomePaciente from '../src/pages/home-paciente'
import HomeMedico from '../src/pages/home-medico'
import Erro from '../src/pages/ERROr/'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/S-o-Lucas-Mendel",
    element: <TelaLogin/>
  },
  {
    path: "/S-o-Lucas-Mendel/admin",
    element: <HomeAdmin/>
  },
  {
    path: "/S-o-Lucas-Mendel/atendente",
    element: <HomeBalconista/>
  },
  {
    path: "/S-o-Lucas-Mendel/medico",
    element: <HomeMedico/>
  },
  {
    path: "/S-o-Lucas-Mendel/paciente",
    element: <HomePaciente/>
  },
  {
    path: "/S-o-Lucas-Mendel/erro",
    element: <Erro/>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
