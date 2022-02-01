import React from "react";
import Search from "./components/Search";
import TodoList from "./components/TodoList";
import "./App.css";

class App extends React.Component {
  state = {
    todo: [
      {
        description: "Buy Milk",
        id: 1,
        completed: false,
      },
      {
        description: "Buy Books",
        id: 2,
        completed: false,
      },
    ],
  };

  handleSubmit = (value) => {
    value.id = Math.random();
    value.completed = false;
    let todos = [...this.state.todo, value];
    this.setState({ todo: todos });
    console.log(this.state.todo);
  };

  handleDelete = (value) => {
    let todo = this.state.todo.filter((todo) => todo.id !== value);
    this.setState({ todo: todo });
  };

  handleComplete = (value) => {
    let newTodo = this.state.todo.map((todo) => {
      return todo.id === value
        ? { ...todo, completed: !todo.completed }
        : { ...todo };
    });
    this.setState({ todo: newTodo });
  };

  render() {
    return (
      <div className="app-div">
        <h1 className="center">React Todo App</h1>
        <Search handleSubmit={this.handleSubmit} />
        <TodoList
          todos={this.state.todo}
          handleDelete={this.handleDelete}
          handleComplete={this.handleComplete}
        />
      </div>
    );
  }
}

export default App;
