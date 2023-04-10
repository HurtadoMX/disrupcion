import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

//Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    '$ ' +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
}

export const IncomeExpenses = () => {
  const { transactions, selectedMonth } = useContext(GlobalContext);

  const amounts = transactions
    .filter(transaction => transaction.month === selectedMonth)
    .map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  );

  return (
    <div className="inc-exp-container">
        <div>
          <h4 style={{color: "#2ecc71"}}>Ingresos</h4>
  <p className="money plus">+{moneyFormatter(income)}</p>
        </div>
        <div>
          <h4 style={{color: "#c0392b"}}>Gastos</h4>
  <p className="money minus">-{moneyFormatter(expense)}</p>
        </div>
      </div>
  )
}
