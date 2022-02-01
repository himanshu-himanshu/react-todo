import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  state = {
    description: "",
  };

  handleChange = (e) => {
    this.setState({ description: e.target.value });
  };

  handleInput = (e) => {
    e.preventDefault();
    this.state.description === ""
      ? alert("Enter Value")
      : this.props.handleSubmit(this.state);
    this.setState({ description: "" });
  };

  render() {
    return (
      <div className="search-div">
        <div className="ui action input search-item">
          <input
            type="text"
            placeholder="Enter a todo.."
            onChange={this.handleChange}
            value={this.state.description}
          />
          <button className="ui button primary" onClick={this.handleInput}>
            Add Todo
          </button>
        </div>
      </div>
    );
  }
}

export default Search;
