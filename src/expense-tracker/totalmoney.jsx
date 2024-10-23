import { useContext } from "react";
import { ExpenseGlobalContext } from "./context";

export default function TotalAmount() {
  const { formData, total } = useContext(ExpenseGlobalContext);

  return (
    <div className="total__amount-container">
      <h3 data-type="total">BALANCE : ${total} </h3>

      <div className="total__amount">
        <div>
          <h1 data-type="income">${formData.income}</h1>
          <p>Total Income </p>
        </div>
        <div>
          <h1 data-type="expenses">${formData.expense}</h1>
          <p>Total Expense </p>
        </div>
      </div>
    </div>
  );
}
