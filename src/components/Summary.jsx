function Summary({ budget, expenses }) {
    const totalSpent = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    const remaining = budget - totalSpent;
  
    return (
      <div>
        <h2>Resumen</h2>
        <p>Presupuesto: ${budget}</p>
        <p>Gastado: ${totalSpent}</p>
        <p>Restante: ${remaining}</p>
      </div>
    );
  }
  
  export default Summary;
  