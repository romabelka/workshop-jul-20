import React from "react";
import PropTypes from "prop-types";
import useInput from "../../hooks/use-input";
import { connect } from "react-redux";
import { addComment } from "../../ac";

function CommentFrom({ articleId, addComment }) {
  const [user, setUser] = useInput();
  const [text, setText] = useInput();

  const handleSubmit = ev => {
    ev.preventDefault();

    addComment({ user, text }, articleId);
  };

  return (
    <form onSubmit={handleSubmit}>
      user: <input value={user} onChange={setUser} />
      comment: <input value={text} onChange={setText} />
      <button>Submit</button>
    </form>
  );
}

CommentFrom.propTypes = {
  articleId: PropTypes.string.isRequired
};

export default connect(
  null,
  {
    addComment
  }
)(CommentFrom);
