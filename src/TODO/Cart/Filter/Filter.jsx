import React, { useState } from "react";
import Data from '../../Data.js';

const Filter = ({ expenses }) => {
  const years = Data.years;

  const [selectedYear, setSelectedYear] = useState('All');

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  // const filteredExpenses = selectedYear === 'All'
  //   ? expenses
  //   : expenses.filter((expense) => 
  //   console.log(expense)
  //   return
  //   expense.date.getFullYear().toString() === selectedYear);

  const filteredExpenses = selectedYear === 'All'
  ? expenses
  : expenses.filter((expense) => {
    console.log(expense); // In giá trị của expense ra để kiểm tra
    return expense.date.getFullYear().toString() === selectedYear;
  });


  return (
    <div className="filter">
      <h2>Filter by year</h2>
      <select value={selectedYear} onChange={handleYearChange}>
        {years.map((year, index) => (
          <option key={index} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
)};

export default Filter;