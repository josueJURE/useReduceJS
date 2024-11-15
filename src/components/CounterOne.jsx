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
/* 

the reducer value returns one value which is the new state but
 for this transition to happen we need the action parameter. It's an
 instruction to the reducer function

*/

function CounterOne() {
  useReducer(reducer, initialState);

  return (
    <div>
      <button onClick={reducer}>Count {initialState}</button>
      <button>Decrement</button>
      <button>Reset</button>
    </div>
  );
}

export default CounterOne;
