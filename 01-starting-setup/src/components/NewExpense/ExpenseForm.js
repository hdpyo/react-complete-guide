import './ExpenseForm.css';

export default function ExpenseForm() {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="" />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input type="number" name="amount" id="" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input type="date" name="date" min="2019-01-01" max="2022-12-31" />
        </div>
        <div />
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
