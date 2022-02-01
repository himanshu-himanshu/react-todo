import React, { Component } from "react";
import "./Search.css";

export default class TodoList extends Component {
  handleDelete = (id) => {
    this.props.handleDelete(id);
  };
  handleComplete = (id) => {
    this.props.handleComplete(id);
  };
  render() {
    const fetchData = this.props.todos.length ? (
      this.props.todos.map((todo) => {
        return (
          <div className="main-div" key={todo.id}>
            <div className="sub-div">
              <h3 className={todo.completed ? "completed" : "not-completed"}>
                {todo.description}
              </h3>
              <div>
                <button
                  className="done-button"
                  onClick={() => this.handleComplete(todo.id)}
                  disabled={todo.completed}
                >
                  Mark
                </button>
                <button
                  className="delete-button"
                  onClick={() => this.handleDelete(todo.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <div className="main-div empty-todo">
        <div className="sub-div">
          <h1>Hurray! Done for the day :)</h1>
        </div>
      </div>
    );
    return <div className="ui relaxed divided list todo-div">{fetchData}</div>;
  }
}
