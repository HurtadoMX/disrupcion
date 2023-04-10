import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  transactions: [],
  selectedMonth: 0
  }
  
  // ...
  // Create context
export const GlobalContext = createContext(initialState);

  export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  
  // Actions
  function deleteTransaction(id) {
  dispatch({
  type: 'DELETE_TRANSACTION',
  payload: id
  });
  }
  
  function addTransaction(transaction) {
  dispatch({
  type: 'ADD_TRANSACTION',
  payload: transaction
  });
  }
  
  function selectMonth(monthIndex) {
  dispatch({
  type: 'SELECT_MONTH',
  payload: monthIndex
  });
  }
  
  return (<GlobalContext.Provider value={{
  transactions: state.transactions,
  selectedMonth: state.selectedMonth,
  deleteTransaction,
  addTransaction,
  selectMonth
  }}>
  {children}
  </GlobalContext.Provider>);
  }