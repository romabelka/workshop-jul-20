import React from "react";
import PropTypes from "prop-types";

function Counter({ count, handleIncrement }) {
  return (
    <div>
      <h3 data-id="counter-value">{count}</h3>
      <button data-id="counter-btn" onClick={handleIncrement}>
        Increment
      </button>
    </div>
  );
}

Counter.propTypes = {
  count: PropTypes.number,
  handleIncrement: PropTypes.func
};

export default Counter;
