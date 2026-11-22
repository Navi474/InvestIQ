import { Navigate } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import ExpensesPage from '../pages/ExpensesPage'
import IncomePage from '../pages/IncomePage'
// @ts-expect-error LoginPage is a JSX module without a declaration file.
import LoginPage from '../pages/LoginPage'
// @ts-expect-error LoginLayout is a JSX module without a declaration file.
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
    path: '/auth',
    element: <LoginLayout />,
    children: [
      { path: 'login', element: <LoginPage /> },
    ],
  }
]

export default routes
