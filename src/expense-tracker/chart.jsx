import { useContext } from "react";
import { ExpenseGlobalContext } from "./context";

export default function Chart() {
  const { total } = useContext(ExpenseGlobalContext);

  let income = total;
  income = String(income).slice(0, 2);

  const styles = {
    background: `conic-gradient(
    var(--brand-clr) ${income === "0" ? 50 : income}%,
    lightgray 0%) `,
  };

  return (
    <div className="chart__container">
      <div style={styles} className="chart"></div>
    </div>
  );
}
