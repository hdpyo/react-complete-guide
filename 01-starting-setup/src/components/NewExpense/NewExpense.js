import './NewExpense.css';

import ExpenseForm from './ExpenseForm';

export default function NewExpense({ onAddExpense }) {
  const saveExpenseData = enteredExpenseData => {
    //
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);

    console.log(onAddExpense(expenseData));
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseData} />
    </div>
  );
}
