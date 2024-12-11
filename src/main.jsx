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
    path: "/projetoHospita",
    element: <TelaLogin/>
  },
  {
    path: "/projetoHospita/admin",
    element: <HomeAdmin/>
  },
  {
    path: "/projetoHospita/atendente",
    element: <HomeBalconista/>
  },
  {
    path: "/projetoHospita/medico",
    element: <HomeMedico/>
  },
  {
    path: "/projetoHospita/paciente",
    element: <HomePaciente/>
  },
  {
    path: "/projetoHospita/erro",
    element: <Erro/>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
