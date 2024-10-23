import { useContext } from "react";
import { ExpenseGlobalContext } from "./context";

export default function ExpenseCards() {
  const { expensesSummary } = useContext(ExpenseGlobalContext);

  return (
    <div>
      <h3>Expense</h3>

      {expensesSummary &&
        expensesSummary.map((item, index) => {
          return (
            <div key={index} className="table">
              <p>{item.description} </p>
              <p>${item.amount}</p>
            </div>
          );
        })}
    </div>
  );
}
