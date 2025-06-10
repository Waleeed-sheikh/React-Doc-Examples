import React from "react";
import { useReducer } from "react";
export default function CounterWithReducer() {
  const initialState = { count: 0, history: [] };
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: "Increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "Undo" })}>Undo</button>
    </div>
  );
}

const counterReducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return {
        count: state.count + 1,
        history: [...state.history, state.count],
      };
    case "decrement":
      return {
        count: state.count - 1,
        history: [...state.history, state.count],
      };
    case "Reset":
      return { count: 0, history: [...state.history, state.count] };
    case "Undo": {
      if (state.history.length === 0) return state;

      const last = state.history[state.history.length - 1];
      return {
        count: last,
        history: state.history.slice(0, -1),
      };
    }
    default:
      return state;
  }
};
