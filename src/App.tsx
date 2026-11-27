import { RouterProvider } from 'react-router-dom'
import router from './app/router/router'
import "./app/styles/reset.css"
import "./app/styles/global.css"
import "./app/styles/variables.css"
function App() {
  return <RouterProvider router={router} />
}

export default App
