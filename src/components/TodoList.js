import React from "react";
import "./TodoList.css";
class TodoList extends React.Component {
  renderTodoList() {
    return this.props.todos.map((todo, i) => {
      return (
        <React.Fragment key={i}>
          <li className={"list-group-item p-3 "}>
            <p
              className={`d-inline fs-6 ${
                todo.completed ? "text-decoration-line-through fst-italic" : ""
              }`}
              onClick={() => this.props.toggleTodo(i)}
            >
              {todo.content}
            </p>
            <i
              className="fa fa-trash float-end"
              onClick={() => this.props.deleteTodo(todo.content)}
            ></i>
          </li>
        </React.Fragment>
      );
    });
  }
  render() {
    return <ul className="list-group my-3">{this.renderTodoList()}</ul>;
  }
}
export default TodoList;
