import { Outlet } from "react-router-dom";
import { Header } from "../../widgets/header";
export default function MainLayout() {
  return (
    <div>
      <Header/>
      
      <main>
        <div>
          <h3>Баланс: </h3>
          <div> 
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