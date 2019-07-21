import React, { Component } from "react";
import Comment from "../comment";
import toggleOpen from "../../decorators/toggleOpen";

@toggleOpen
class CommentList extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.toggleOpen}>
          {this.props.isOpen ? "hide" : "show"} comments
        </button>
        {this.getBody()}
      </div>
    );
  }

  getBody() {
    if (!this.props.isOpen) return null;
    const { comments } = this.props;
    if (!comments) return <h3>No comments yet</h3>;

    return comments.map(comment => (
      <Comment comment={comment} key={comment.id} />
    ));
  }
}

export default CommentList;
