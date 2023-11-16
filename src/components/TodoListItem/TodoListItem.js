import React, { Component } from "react";
import "./TodoListItem.css";

export default class TodoListItem extends Component {
  // constructor() {
  //   super();
  //   this.onClickLabel = () => {
  //     console.log(`Done: ${this.props.label}`);
  //   };
  // }

  onClickLabel = () => {
    console.log(`Done: ${this.props.label}`); //тот же эффекто, что и при создании конструктора, но проще (функция создаётся на объекте, а не на прототипе)
  };

  render() {
    const { label, important = false } = this.props;
    const textColor = {
      color: important ? "tomato" : "black",
      width: "95%",
    };
    const buttonMargin = {
      marginLeft: "5px",
    };
    return (
      <span className="todo-list-item d-flex">
        <span
          style={textColor}
          className="todo-list-item-label"
          onClick={this.onClickLabel}
        >
          {label}
        </span>
        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
        >
          <i className="bi bi-box-arrow-up-left"></i>
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          style={buttonMargin}
        >
          <i className="bi bi-trash3-fill"></i>
        </button>
      </span>
    );
  }
}

// const TodoListItem = ({ label, important = false }) => {

// };

// export default TodoListItem;
