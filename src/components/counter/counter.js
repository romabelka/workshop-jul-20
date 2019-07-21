import React from "react";

function Counter({ count, handleIncrement }) {
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default Counter;
