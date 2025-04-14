// src/App.js
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

  const filteredExpenses = expenses.filter(expense =>
    expense.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4 bg-white text-white p-4 rounded"> {/* Dark container */}
      <h1 className="mb-3 text-success">Expense Tracker</h1>
      <p className="text-muted mb-3"> 
        Start taking control of your finances and life. Record, categorize and analyze your spending. 
      </p>
      <div className="row">
        <div className="col-md-4">
          <div className="bg-secondary p-3 rounded"> {/* Darker sidebar */}
            <ExpenseForm onAddExpense={addExpense} />
          </div>
        </div>
        <div className="col-md-8">
          <SearchBar onSearch={handleSearch} />
          <div className="bg-secondary p-3 rounded"> {/* Darker table area */}
            <ExpenseList expenses={filteredExpenses} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;