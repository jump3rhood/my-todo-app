import React from "react";

class TotalTodos extends React.Component {
  render() {
    return (
      <p className="display-6 text-center mt-2">
        Total number of todos: {this.props.total}
      </p>
    );
  }
}

export default TotalTodos;
