import { useContext } from "react";
import { ExpenseGlobalContext } from "./context";

export default function Modal() {
  const {
    isActive,
    setIsActive,
    description,
    setDescription,
    amount,
    setAmount,
    typeOfTransact,
    setTypeOfTransact,
    getFormData,
  } = useContext(ExpenseGlobalContext);

  return (
    <div className={isActive ? "modal__container active" : "modal__container"}>
      <div className="modal">
        <div>
          <h3>Add New Transaction</h3>
          <button onClick={() => setIsActive(false)} className="close__btn">
            X
          </button>
        </div>
        <div className="forms">
          <div className="input__group">
            <label htmlFor="description">Enter Description</label>
            <input
              id="description"
              type="text"
              name="description"
              placeholder="type a description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="input__group">
            <label htmlFor="amount">Enter Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              id="amount"
              placeholder=" Enter an amount"
            />
          </div>

          <div className="radio__btns">
            <label htmlFor="income">
              <input
                type="radio"
                id="income"
                name="typeOfTransaction"
                value="income"
                checked={typeOfTransact === "income"}
                onChange={(e) => setTypeOfTransact(e.target.value)}
              />
              Income
            </label>
            <label htmlFor="expense">
              <input
                type="radio"
                id="expense"
                name="typeOfTransaction"
                value="expense"
                checked={typeOfTransact === "expense"}
                onChange={(e) => setTypeOfTransact(e.target.value)}
              />
              Expense
            </label>
          </div>
        </div>

        <div className="btns">
          <button onClick={() => setIsActive(false)}>Cancel</button>
          <button onClick={getFormData}>Add</button>
        </div>
      </div>
    </div>
  );
}
