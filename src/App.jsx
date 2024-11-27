import { useState } from 'react';
import BudgetInput from './components/BudgetInput';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Summary from './components/Summary';

function App() {
  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState([]);
 

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };


  return (
    <div className="container">
      <h1>Administrador de Gastos</h1>
      {budget <= 0 ? (
        <BudgetInput setBudget={setBudget} />
      ) : (
        <>
          <Summary budget={budget} expenses={expenses} />
          <ExpenseForm addExpense={addExpense} />
          <ExpenseList expenses={expenses} />
        </>
      )}
    </div>
  );
}

export default App;
