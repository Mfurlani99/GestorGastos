import { useState } from 'react';
import Alertview from './alertView';

function ExpenseForm({ addExpense, budget }) {
  const [expense, setExpense] = useState({ name: '', date: '', category: '', amount: '' });
  const [alertMessage, setAlertMessage] = useState("");
  const campo ="faltante";

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar si el gasto es mayor que el presupuesto
    if (expense.amount === "" || expense.name === "" || expense.date === "" || expense.category === "") {
      setAlertMessage(`Por favor, completa el campo ${campo} `);
      return;
    }

    if (Number(expense.amount) > budget) {
      setAlertMessage("El monto supera el presupuesto disponible.");
    } else {
      // Si el gasto está dentro del presupuesto, agregar el gasto
      addExpense({ ...expense, amount: Number(expense.amount) });
      console.log(Number(expense.amount))
      setExpense({ name: '', date: '', category: '', amount: '' }); // Limpiar el formulario
      setAlertMessage(""); // Limpiar cualquier mensaje de alerta anterior
      
      setExpense((prevExpense) => ({
        ...prevExpense,
        amount: 0
      }));

      console.log(Number(expense.amount))
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar Gasto</h2>
      {/* Mostrar alerta si hay un mensaje */}
      <Alertview message={alertMessage} />
      
      <input
        type="text"
        name="name"
        value={expense.name}
        onChange={handleChange}
        placeholder="Descripción"
      />
      <input
        type="date"
        name="date"
        value={expense.date}
        onChange={handleChange}
      />
      <select
        name="category"
        className="form-control"
        value={expense.category}
        onChange={handleChange}
      >
        <option value="">Selecciona Categoría</option>
        <option value="comida">Comida</option>
        <option value="transporte">Transporte</option>
        <option value="entretenimiento">Entretenimiento</option>
        <option value="otros">Otros</option>
      </select>
      <input
        type="number"
        name="amount"
        className="form-control"
        value={expense.amount}
        onChange={handleChange}
        placeholder="Monto"
      />
      <button type="submit" className="btn btn-primary">Agregar</button>
    </form>
  );
}

export default ExpenseForm;
