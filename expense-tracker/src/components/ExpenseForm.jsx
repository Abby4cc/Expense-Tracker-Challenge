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
    <form onSubmit={handleSubmit}>
    <h2 className="mb-1">Add Expense</h2> 
    <p className="text-muted mb-3">Enter your expense details below.</p>
    <div className="mb-3">
        <label className="form-label">Expense Name</label>
        <input type="text" className="form-control bg-white text-white border-secondary" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <input type="text" className="form-control bg-white text-white border-secondary" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div className="mb-3">
        <label className="form-label">Category</label>
        <input type="text" className="form-control bg-white text-white border-secondary" value={category} onChange={(e) => setCategory(e.target.value)} />
      </div>
      <div className="mb-3">
        <label className="form-label">Amount</label>
        <input type="number" className="form-control bg-white text-white border-secondary" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>
      <div className="mb-3">
        <label className="form-label">Date</label>
        <input type="date" className="form-control bg-white text-white border-secondary" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-primary">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;