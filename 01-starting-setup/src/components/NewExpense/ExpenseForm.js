import './ExpenseForm.css';
import { useState } from 'react';

export default function ExpenseForm() {
  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: '',
  });

  const titleChangeHandler = event => {
    setUserInput({
      ...userInput,
      title: event.target.value,
    });
  };

  const amountChangeHandler = event => {
    setUserInput({
      ...userInput,
      amount: event.target.value,
    });
  };

  const dateChangeHandler = event => {
    setUserInput({
      ...userInput,
      date: new Date(event.target.value),
    });
  };

  const submitHandler = event => {
    event.preventDefault();

    console.log(userInput);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
        <div />
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
