import React from 'react';

function ExpenseList({ expenses, onDelete }) {
  return (
    <table className="table table-striped table-light table-hover"> 
      <thead className="table-dark">
        <tr>
          <th>Expense</th> 
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense, index) => (
          <tr key={index}>
            <td>{expense.name}</td>
            <td>{expense.description}</td>
            <td>{expense.category}</td>
            <td>{expense.amount}</td>
            <td>{expense.date}</td>
            <td>
              <button
                className="btn btn-danger btn-sm" 
                onClick={() => onDelete(index)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseList;