function ExpenseList({ expenses }) {
    return (
      <div>
        <h2>Gastos</h2>
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>
              {expense.date} - {expense.name} ({expense.category}) - ${expense.amount}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default ExpenseList;
  