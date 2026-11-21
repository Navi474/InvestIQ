import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div>
      <header>
        <span>InvestIQ</span>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>InvestIQ</footer>
    </div>
  )
}
