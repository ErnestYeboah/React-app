/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const ExpenseGlobalContext = createContext();

export default function ExpenseGlobalState({ children }) {
  const [isActive, setIsActive] = useState(false);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [typeOfTransact, setTypeOfTransact] = useState("");
  const [income, setIncome] = useState("");
  const [expense, setExpense] = useState("");
  const [desc, setDesc] = useState("");
  const [total, setTotal] = useState(0);

  const [newExpense, setNewExpense] = useState([]);
  const [newIncomes, setNewIncome] = useState([]);

  function getFormData() {
    checkTypeOfTransction();
    setDesc(description);
    addNewObject();
    setDescription("");
    setAmount("");
    setTypeOfTransact("");
    setIsActive(false);
  }

  function addNewObject() {
    if (typeOfTransact === "income") {
      setNewIncome((i) => [...i, { description: description, amount: amount }]);
    } else {
      setNewExpense((e) => [
        ...e,
        { description: description, amount: amount },
      ]);
    }
  }

  function getTotal() {
    if (income || expense) {
      setTotal(income || expense);
    }
    if (income && expense) {
      setTotal(income - expense);
    }
  }

  function checkTypeOfTransction() {
    if (typeOfTransact === "income") {
      setIncome(Number(amount));
    }
    if (typeOfTransact === "expense") {
      setExpense(Number(amount));
    }
  }
  useEffect(() => {
    getTotal();
  }, [income, expense]);

  return (
    <ExpenseGlobalContext.Provider
      value={{
        isActive,
        setIsActive,
        description,
        setDescription,
        amount,
        setAmount,
        typeOfTransact,
        setTypeOfTransact,
        income,
        expense,
        desc,
        getFormData,
        total,
        newExpense,
        newIncomes,
      }}
    >
      {children}
    </ExpenseGlobalContext.Provider>
  );
}
