import { useState } from 'react';

import './ExpenseItem.css';

import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

export default function ExpenseItem({ title, date, amount }) {
  const [newTitle, setNewTitle] = useState(title);

  const clickHandler = () => {
    setNewTitle('Updated!');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{newTitle}</h2>
        <div className="expense-item__price">${amount}</div>
        <button type="button" onClick={clickHandler}>
          Change Title
        </button>
      </div>
    </Card>
  );
}
