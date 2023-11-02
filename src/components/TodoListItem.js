import React from "react";
import "./TodoListItem.css";

const TodoListItem = ({ label, important = false }) => {
  const textColor = {
    color: important ? "tomato" : "black",
    width: "95%",
  };
  const buttonMargin = {
    marginLeft: "5px",
  };
  return (
    <span className="todo-list-item d-flex">
      <span style={textColor}>{label}</span>
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
};

export default TodoListItem;
