import { Navigate } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import ExpensesPage from '../pages/ExpensesPage'
import IncomePage from '../pages/IncomePage'

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
]

export default routes
