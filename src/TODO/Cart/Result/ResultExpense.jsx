import React from 'react';
import "./ResultExpense.css"
import Filter from '../Filter/Filter';
import ChartItem from '../Chart/Chart';

const ExpenseList = ({ expenses }) => {
  
  return (
    <div className="ResultExpense">
      <Filter/>
<ChartItem/>
      <ul className="expense-list">
      {expenses.map((expense, index) => (        
    <li key={index}>
          <div className="card expense-item">
            <div className="expense-date">
              <div className="expense-date-month">{expense.date.toLocaleString('en-US', { month: 'long' })}</div>
              <div className="expense-date-year">{expense.date.getFullYear()}</div>
              <div className="expense-date-day">{expense.date.getDate()}</div>
            </div>
            <div className="expense-item-desc">
              <h2>{expense.title}</h2>
              <div className="expense-item-price">
                ${expense.amount}
              </div>
            </div>
          </div>
          
        </li>
      ))}
      </ul>
    </div>
  );
};

const ResultExpense = ({ expenses }) => {
  return (   
      <ExpenseList expenses={expenses} />
  );
};

export default ResultExpense;
