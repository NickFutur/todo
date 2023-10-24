import React from "react";
const TodoList = () => {
  const items = ["Exe. 1", "Exe. 2"];
  return (
    <ul>
      <li>{items[0]}</li>
      <li>{items[1]}</li>
    </ul>
  );
};

export default TodoList;
