import { Navigate } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import ExpensesPage from '../pages/ExpensesPage'
import IncomePage from '../pages/IncomePage'
// import LoginPage from '../pages/LoginPage'
import { AuthPage } from '../../pages/auth'
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
      { index: true, element: <AuthPage /> },
    ],
  }
]

export default routes
