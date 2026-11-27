import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <header>
        <span>InvestIQ</span>
      </header>

      <main>
        <div>
          <h3>Баланс: </h3>
          <div> // в цьому діві треба зробити інпут для введення суми і щоб справа нього був напис UAH, як на макеті
            <input type="number" placeholder="0" className="currency-input" />
            <span className="currency-suffix">UAH</span>
          </div>
        </div>
        <Outlet />
      </main>
      <footer>InvestIQ</footer>
    </div>
  );
}
