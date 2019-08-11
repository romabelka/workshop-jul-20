import React from "react";
import PropTypes from "prop-types";

function Counter({ count, handleIncrement }) {
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

Counter.propTypes = {
  count: PropTypes.number,
  handleIncrement: PropTypes.func
};

export default Counter;
