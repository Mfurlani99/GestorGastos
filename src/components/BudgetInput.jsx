import { useState } from 'react';

function BudgetInput({ setBudget }) {
  const [inputBudget, setInputBudget] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const budgetValue = Number(inputBudget);

    // Validar el presupuesto
    if (budgetValue > 0) {
      setBudget(budgetValue);
      setInputBudget('');
    } else {
      alert('Por favor, ingresa un presupuesto válido.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 border rounded shadow-sm">
      <h2 className="text-center mb-4">Configurar Presupuesto</h2>

      <div className="mb-3">
        <label htmlFor="budgetInput" className="form-label">
          Presupuesto inicial:
        </label>
        <input
          type="number"
          id="budgetInput"
          className="form-control"
          value={inputBudget}
          onChange={(e) => setInputBudget(e.target.value)}
          placeholder="Ingresa tu presupuesto"
        />
      </div>

      <button type="submit" className="btn btn-primary w-100">
        Establecer
      </button>
    </form>
  );
}

export default BudgetInput;
