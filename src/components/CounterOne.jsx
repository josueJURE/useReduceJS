import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
      default : 
      return state;
  }
};
/* the reducer value returns one value which is the new state but
 for this transition to happen we need the action parameter. It's an
 instruction to the reducer function */

function CounterOne() {
 const [count, dispatch] = useReducer(reducer, initialState);
  /* use useReducer returns the current state which we've called count paired with a dispatch method */

  return (
    <div>
    <div>{count}</div>
      <button onClick={()=> dispatch("increment")}>increment count</button>
      <button onClick={()=> dispatch("decrement")}>decrement counnt</button>
      <button onClick={()=> dispatch("reset")}>reset count </button>
    </div>
    /* note that without () => we'd get a 'too many renders" error */
  );

}/*  */

export default CounterOne;
