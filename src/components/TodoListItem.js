import React from "react";

const TodoListItem = ({ label, important = false }) => {
  const textColor = {
    color: important ? "tomato" : "black",
  };
  return <span style={textColor}>{label}</span>;
};

export default TodoListItem;
