import React, { useState } from 'react';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import SearchBar from './components/SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleDelete = (indexToDelete) => {
    setExpenses(expenses.filter((_, index) => index !== indexToDelete));
  };

  const filteredExpenses = expenses.filter(expense =>
    expense.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4 bg-white p-4 rounded">
      <h1 className="mb-3 text-dark">Expense Tracker</h1>
      <p className="text-muted mb-3">
        Start taking control of your finances and life. Record, categorize and analyze your spending.
      </p>
      <div className="row">
        <div className="col-md-4">
          <div className="bg-light p-2 rounded">
            <ExpenseForm onAddExpense={addExpense} />
          </div>
        </div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-12 d-flex align-items-center justify-content-center mb-3"> 
              <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} onSearch={handleSearch} /> 
            </div>
            <div className="col-md-12">
              <div className="p-3 rounded">
                <ExpenseList expenses={filteredExpenses} onDelete={handleDelete} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;