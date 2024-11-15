import React, { useReducer } from "react";

const initialState = { firstCounter: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {firstCounter : state.firstCounter + action.value};
    case "decrement":
      return {firstCounter : state.firstCounter - action.value};
      case "increment by 5" : 
      return {firstCounter: state.firstCounter + action.value}
      case "decrement by 2": 
      return {firstCounter: state.firstCounter + action.value}
    case "reset":
      return initialState
    default:
      return state;
  }
};
/* the reducer value returns one value which is the new state but
 for this transition to happen we need the action parameter. It's an
 instruction to the reducer function */

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);
  /* use useReducer returns the current state which we've called count paired with a dispatch method */

  return (
    <div>
      <div> {count.firstCounter}</div>
      <button onClick={() => dispatch({type :"increment", value: 1})}>increment count</button>
      <button onClick={() => dispatch({type: "decrement", value: -1})}>decrement count</button>
      <button onClick={() => dispatch({type : "reset"})}>reset count </button>
      <button onClick={() => dispatch({type :"increment by 5", value: 5})}>increment by 5</button>
      <button onClick={() => dispatch({type: "decrement by 2", value: 2})}>decrement by 2</button>
      
    </div>
    /* note that without () => we'd get a 'too many renders" error */
  );
} /*  */

export default CounterTwo;
