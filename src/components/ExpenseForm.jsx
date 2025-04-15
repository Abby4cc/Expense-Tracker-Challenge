import React, { useState } from 'react';

function ExpenseForm({ onAddExpense }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExpense({ name, description, category, amount, date });
    setName('');
    setDescription('');
    setCategory('');
    setAmount('');
    setDate('');
  };

  return (
    <div className="expense-form-container border border-dark rounded p-3 bg-white"> 
      <form onSubmit={handleSubmit}>
        <h2 className="mb-1 text-dark">Add Expense</h2>
        <p className="text-muted mb-3">Enter your expense details below.</p>

        <div className="mb-3 text-dark">
          <input
            type="text"
            className="form-control bg-white text-dark border-secondary"
            id="expenseName"
            placeholder="Enter expense name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control bg-white text-dark border-secondary"
            id="description"
            placeholder="Enter expense description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control bg-white text-dark border-secondary"
            id="category"
            placeholder="Enter expense category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control bg-white text-dark border-secondary"
            id="amount"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="date"
            className="form-control bg-white text-dark border-secondary"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-dark">Submit</button>
      </form>
    </div>
  );
}

export default ExpenseForm;