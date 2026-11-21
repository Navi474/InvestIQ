import { NavLink } from 'react-router-dom'

export default function CategoryNav() {
  return (
    <nav aria-label="Фінанси">
      <NavLink to="/expenses">Витрати</NavLink>{' | '}
      <NavLink to="/income">Дохід</NavLink>
    </nav>
  )
}
