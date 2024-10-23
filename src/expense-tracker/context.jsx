/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const ExpenseGlobalContext = createContext();

export default function ExpenseGlobalState({ children }) {
  const [isActive, setIsActive] = useState(false);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [typeOfTransact, setTypeOfTransact] = useState("");
  const [formData, setFormData] = useState({
    description: "",
    income: "",
    expense: "",
  });

  const [expensesSummary, setExpensesSummary] = useState([]);
  const [incomesSummary, setIncomesSummary] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    localStorage.setItem("Expenses", JSON.stringify(expensesSummary));
  }, [expensesSummary]);

  function getFormData() {
    setFormData((p) => ({
      ...p,
      description: description,
      income: typeOfTransact === "income" ? Number(amount) : formData.income,
      expense: typeOfTransact === "expense" ? Number(amount) : formData.expense,
    }));

    setAmount("");
    setDescription("");
    setTypeOfTransact("");
    addNewSummary();
    setIsActive(false);
  }

  function getTotal() {
    const { income, expense } = formData;
    if (income || expense) {
      setTotal(income || expense);
    }
    if (income && expense) {
      setTotal(income - expense);
    }
  }

  function addNewSummary() {
    if (typeOfTransact === "income") {
      const cpyIncomesSummary = [
        ...incomesSummary,
        { description: description, amount: amount },
      ];
      setIncomesSummary(cpyIncomesSummary);
    } else {
      const cpyExpensesSummary = [
        ...expensesSummary,
        { description: description, amount: amount },
      ];
      setExpensesSummary(cpyExpensesSummary);
    }
  }

  useEffect(() => {
    getTotal();
  }, [formData.income, formData.expense]);

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
        getFormData,
        formData,
        total,
        expensesSummary,
        incomesSummary,
      }}
    >
      {children}
    </ExpenseGlobalContext.Provider>
  );
}
