// src/actions/counterActions.js

// Действие для увеличения счетчика
export const increment = () => {
    return { type: 'INCREMENT' };
  };
  
  // Действие для уменьшения счетчика
  export const decrement = () => {
    return { type: 'DECREMENT' };
  };
  
  // Действие для установки конкретного значения счетчика
  export const setCounter = (value) => {
    return { type: 'SET', payload: value };
  };
  
  // Действие для увеличения счетчика на заданное число
  export const incrementByAmount = (amount) => {
    return { type: 'INCREMENT_BY_AMOUNT', payload: amount };
  };
  
  // Действие для сброса счетчика
  export const resetCounter = () => {
    return { type: 'RESET' };
  };
  