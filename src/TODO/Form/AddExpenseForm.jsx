import React, { useState } from "react";
import "../Form/Todo.css"


const AddExpenseForm = ({ onAddExpense }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const expense = {
      title,
      amount: +amount,
      date: new Date(date),
    };
    onAddExpense(expense);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="expense-controls">
        <div className="expense-control">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="expense-control">
          <label>Amount</label>
          <input
            type="number"
            min={"0"}
            step={"0.01"}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="expense-control">
          <label>Date</label>
          <input
            type="date"
            min={"2019-01-01"}
            max={"2022-12-31"}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>
      <div className="expense-actions">
        <button type="button">Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default AddExpenseForm;
