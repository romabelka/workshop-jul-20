import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { commentSelector } from "../../selectors";

function Comment({ comment }) {
  return (
    <div>
      <p data-id="comment-text">{comment.text}</p>
      <b>{comment.user}</b>
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string.isRequired,
    user: PropTypes.string
  }).isRequired
};

export default connect((state, ownProps) => ({
  comment: commentSelector(state, ownProps)
}))(Comment);
