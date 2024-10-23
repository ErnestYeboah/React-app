import { useContext } from "react";
import { ExpenseGlobalContext } from "./context/context";

export default function IncomeCards() {
  const { newIncomes } = useContext(ExpenseGlobalContext);

  return (
    <div>
      <h3>Income</h3>

      {newIncomes &&
        newIncomes.map((income, index) => {
          return (
            <div key={index} className="table">
              <p>{income.description} </p>
              <p>${income.amount}</p>
            </div>
          );
        })}
    </div>
  );
}
