import Chart from "./chart";
import ExpenseCards from "./expense-card";
import IncomeCards from "./income-card";
import Nav from "./nav";
import "./styles.css";
import TotalAmount from "./totalmoney";
export default function Container() {
  return (
    <>
      <Nav />
      <div className="expense__tracker-container">
        <div>
          <TotalAmount />
          <Chart />
        </div>
        <div>
          <ExpenseCards />
          <IncomeCards />
        </div>
      </div>
      ;
    </>
  );
}
