import React from "react";
import Select from "react-select";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { changeSelection } from "../../ac";

function SelectFilter({ articles, selected, changeSelection }) {
  const options = articles.map(article => ({
    label: article.title,
    value: article.id
  }));

  return (
    <Select
      options={options}
      value={selected}
      onChange={changeSelection}
      isMulti
    />
  );
}

SelectFilter.propTypes = {
  articles: PropTypes.array,
  selected: PropTypes.array,
  changeSelection: PropTypes.func
};

export default connect(
  state => ({
    selected: state.filters.selected,
    articles: state.articles
  }),
  { changeSelection }
)(SelectFilter);
