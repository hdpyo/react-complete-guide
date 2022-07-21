import './ExpenseItem.css';

import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

export default function ExpenseItem({ title, date, amount }) {
  const clickHandler = () => {
    console.log('clicked!');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
        <button type="button" onClick={clickHandler}>
          Change Title
        </button>
      </div>
    </Card>
  );
}
