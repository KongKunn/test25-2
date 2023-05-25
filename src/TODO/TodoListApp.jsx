import React, { useState } from "react";
import AddExpenseForm from "../TODO/Form/AddExpenseForm";
import ResultExpense from "../TODO/Cart/Result/ResultExpense";
import Filter from "../TODO/Cart/Filter/Filter"

const TodoListApp = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  return (
    <div>
      <AddExpenseForm onAddExpense={addExpense} />
      <ResultExpense expenses={expenses}/>
 
      <Filter expenses={expenses} />

    </div>
  );
};

export default TodoListApp;
