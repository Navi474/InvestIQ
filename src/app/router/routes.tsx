import { Navigate } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import ExpensesPage from '../pages/ExpensesPage'
import IncomePage from '../pages/IncomePage'
import LoginPage from '../pages/LoginPage'
import LoginLayout from '../layouts/LoginLayout'

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to="/expenses" replace /> },
      { path: 'expenses', element: <ExpensesPage /> },
      { path: 'income', element: <IncomePage /> },
    ],
  },

  {
    path: '/login',
    element: <LoginLayout />,
    children: [
      { index: true, element: <LoginPage /> },
    ],
  },
  { path: '/auth/login', element: <Navigate to="/login" replace /> },
]

export default routes
