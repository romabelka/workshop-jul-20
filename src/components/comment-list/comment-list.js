import React, { Component } from "react";
import PropTypes from "prop-types";
import Comment from "../comment";
import toggleOpen from "../../decorators/toggleOpen";
import CommentFrom from "../comment-form";

@toggleOpen
class CommentList extends Component {
  static propTypes = {
    article: PropTypes.object.isRequired,
    //from @toggleOpen
    toggleOpen: PropTypes.func,
    isOpen: PropTypes.bool
  };

  render() {
    return (
      <div data-id="comment-container">
        <button onClick={this.props.toggleOpen} data-id="comment-list-btn">
          {this.props.isOpen ? "hide" : "show"} comments
        </button>
        {this.getBody()}
      </div>
    );
  }

  getBody() {
    if (!this.props.isOpen) return null;
    const { comments, id } = this.props.article;
    if (!comments) return <h3>No comments yet</h3>;

    return (
      <div data-id="comment-list-body">
        {comments.map(commentId => (
          <Comment id={commentId} key={commentId} />
        ))}
        <CommentFrom articleId={id} />
      </div>
    );
  }
}
/*

CommentList.propTypes = {

}
*/

export default CommentList;
