import { useContext } from "react";
import { ExpenseGlobalContext } from "./context";
import { nanoid } from "nanoid";

export default function IncomeCards() {
  const { incomesSummary } = useContext(ExpenseGlobalContext);
  return (
    <div>
      <h3>Income</h3>
      {incomesSummary &&
        incomesSummary.map((item) => {
          return (
            <div key={nanoid} className="table">
              <p>{item.description} </p>
              <p>${item.amount}</p>
            </div>
          );
        })}
    </div>
  );
}
