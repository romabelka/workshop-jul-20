import React, { Component } from "react";

export default OriginalComponent =>
  class ToggleOpen extends Component {
    state = {
      isOpen: false
    };

    toggleOpen = () => {
      this.setState(currentState => ({
        isOpen: !currentState.isOpen // false -> true
      }));
    };

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          toggleOpen={this.toggleOpen}
        />
      );
    }
  };
