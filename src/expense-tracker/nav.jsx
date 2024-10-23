import { useContext } from "react";
import Modal from "./modal";
import { ExpenseGlobalContext } from "./context/context";

export default function Nav() {
  const { setIsActive } = useContext(ExpenseGlobalContext);
  return (
    <>
      <nav>
        <h2>Expense Tracker</h2>
        <button onClick={() => setIsActive(true)}>Add New Transaction</button>
      </nav>
      <Modal />
    </>
  );
}
