import React, { Component } from "react";
import Comment from "../comment";

class CommentList extends Component {
  state = {
    isOpen: false
  };
  render() {
    return (
      <div>
        <button onClick={this.toggleOpen}>
          {this.state.isOpen ? "hide" : "show"} comments
        </button>
        {this.getBody()}
      </div>
    );
  }

  getBody() {
    if (!this.state.isOpen) return null;
    const { comments } = this.props;
    if (!comments) return <h3>No comments yet</h3>;

    return comments.map(comment => (
      <Comment comment={comment} key={comment.id} />
    ));
  }

  toggleOpen = () => {
    this.setState(currentState => ({
      isOpen: !currentState.isOpen // false -> true
    }));
  };
}

export default CommentList;
