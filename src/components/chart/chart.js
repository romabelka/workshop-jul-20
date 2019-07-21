import React from "react";
import PropTypes from "prop-types";

const drawChart = props => container => {
  //draw chart with d3 inside container
  //update with new props
};

function Chart(props) {
  return <div ref={drawChart(props)} />;
}

Chart.propTypes = {
  article: PropTypes.array
};

export default Chart;
