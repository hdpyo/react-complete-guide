import './ExpenseForm.css';
import { useState } from 'react';

export default function ExpenseForm() {
  // const [enteredTitle, setEnteredTitle] = useState('');
  // const [enteredAmount, setEnteredAmount] = useState('');
  // const [enteredDate, setEnteredDate] = useState('');

  // eslint-disable-next-line no-unused-vars
  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: '',
  });

  const titleChangeHandler = event => {
    // setUserInput({
    //   ...userInput,
    //   title: event.target.value,
    // });

    /*
      < 강사 코멘트 >
      동시에 수많은 상태 업데이트를 계획한다면
      오래되었거나 잘못된 상태 스냅샷에 의존할 수도 있습니다.

      이 접근 방법을 사용한다면, 리액트는 이 안에 있는 함수에서
      이 상태 스냅샷(=prevState)이 가장 최신 상태의 스냅샷이라는 것과
      항상 계획된 상태 업데이트를 염두에 두고 있다는 것을 보장할 것입니다

      그래서 이것은 항상 최신 상태의 스냅샷에서 작업하도록 하는 좀더 안전한 방법입니다.
      만약 여러분의 상태 업데이트가 이전 상태에 의존하고 있다면 이 함수 폼을 사용하세요.
    */
    setUserInput(prevState => ({
      ...prevState,
      title: event.target.value,
    }));
  };

  const amountChangeHandler = event => {
    setUserInput(prevState => ({
      ...prevState,
      amount: event.target.value,
    }));
  };

  const dateChangeHandler = event => {
    setUserInput(prevState => ({
      ...prevState,
      date: event.target.value,
    }));
  };

  return (
    <form>
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
