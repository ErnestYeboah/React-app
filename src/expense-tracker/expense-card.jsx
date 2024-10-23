import { useContext } from "react";
import { ExpenseGlobalContext } from "./context/context";

export default function ExpenseCards() {
  const { newExpense } = useContext(ExpenseGlobalContext);

  console.log(newExpense);

  return (
    <div>
      <h3>Expense</h3>

      {newExpense &&
        newExpense.map((expense, index) => {
          return (
            <div key={index} className="table">
              <p>{expense.description} </p>
              <p>${expense.amount}</p>
            </div>
          );
        })}
    </div>
  );
}
