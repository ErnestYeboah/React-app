import { useContext } from "react";
import { ExpenseGlobalContext } from "./context/context";

export default function TotalAmount() {
  const { income, expense, total } = useContext(ExpenseGlobalContext);

  return (
    <div className="total__amount-container">
      <h3 data-type="total">BALANCE : ${total} </h3>

      <div className="total__amount">
        <div>
          <h1 data-type="income">${income}</h1>
          <p>Total Income </p>
        </div>
        <div>
          <h1 data-type="expenses">${expense}</h1>
          <p>Total Expense </p>
        </div>
      </div>
    </div>
  );
}
