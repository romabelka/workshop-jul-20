import React from "react";
import DayPicker, { DateUtils } from "react-day-picker";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "react-day-picker/lib/style.css";
import { changeDateRange } from "../../ac";

function DateRange({ range, changeDateRange }) {
  const { from, to } = range;
  const selectedRange =
    from && to && `${from.toDateString()} - ${to.toDateString()}`;

  return (
    <div className="date-range">
      <DayPicker
        selectedDays={day => DateUtils.isDayInRange(day, { from, to })}
        onDayClick={day => changeDateRange(DateUtils.addDayToRange(day, range))}
      />
      {selectedRange}
    </div>
  );
}

DateRange.propTypes = {
  range: PropTypes.object,
  changeDateRange: PropTypes.func
};

export default connect(
  state => ({
    range: state.filters.dateRange
  }),
  { changeDateRange }
)(DateRange);
