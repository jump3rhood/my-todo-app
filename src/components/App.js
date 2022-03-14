import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TotalTodos from "./TotalTodos";

const todos = [
  {
    content: "Buy Milk",
    completed: false,
  },
  {
    content: "Go jogging",
    completed: false,
  },
  {
    content: "Complete writing essay for english class",
    completed: false,
  },
  {
    content: "Window shopping",
    completed: false,
  },
  {
    content: "Open new bank account",
    completed: true,
  },
];

class App extends React.Component {
  state = { todos };
  constructor(props) {
    super(props);
    this.addNewTodo = this.addNewTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }
  addNewTodo(text) {
    const newTodo = { content: text, completed: false };
    this.setState({ todos: [...this.state.todos, newTodo] });
  }
  toggleTodo(idx) {
    let changedTodos = [];
    for (let i = 0; i < this.state.todos.length; i++) {
      if (i === idx) {
        let toggledTodo = this.state.todos[i];
        toggledTodo.completed = !toggledTodo.completed;
        changedTodos.push(toggledTodo);
      } else {
        changedTodos.push(this.state.todos[i]);
      }
    }
    this.setState({ todos: changedTodos });
  }
  deleteTodo(text) {
    const restOfTodos = this.state.todos.filter(
      (todo) => todo.content !== text
    );
    this.setState({ todos: restOfTodos });
  }
  render() {
    return (
      <div className="container-sm mt-5">
        <h1 className="display-3 text-center mb-4">
          My Todo List <i className="fa fa-list " aria-hidden="true"></i>
        </h1>

        <TodoForm addNewTodo={this.addNewTodo} />
        <TodoList
          todos={this.state.todos}
          toggleTodo={this.toggleTodo}
          deleteTodo={this.deleteTodo}
        />
        <TotalTodos total={this.state.todos.length} />
      </div>
    );
  }
}

export default App;
