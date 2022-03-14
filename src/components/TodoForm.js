import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addNewTodo(this.state.text);
    this.setState({ text: "" });
  }

  render() {
    return (
      <form className="border p-4" onSubmit={this.handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="todoText"
            value={this.state.text}
            placeholder="Add a new todo"
            onChange={(e) => this.setState({ text: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Todo
        </button>
      </form>
    );
  }
}

export default TodoForm;
