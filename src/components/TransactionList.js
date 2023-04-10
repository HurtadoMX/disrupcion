import React, { useContext } from "react";
import { Transaction } from "./Transaction";
import { GlobalContext } from "../context/GlobalState";
import moment from "moment";

export const TransactionList = () => {
  const { transactions, selectedMonth } = useContext(GlobalContext);

  const filteredTransactions = transactions.filter(
    (transaction) => transaction.month === selectedMonth
  );

  const today = moment().format("D MMM");

  return (
    <div className="transacciones">
      <h3>
        {filteredTransactions.length === 0
          ? "No hay movimientos para este mes"
          : "Mes seleccionado"}
      </h3>
      <ul className="list">
        {filteredTransactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};
