import React from "react";
import TodoListItem from "./TodoListItem";
const TodoList = () => {
  const items = ["Exe. 1", "Exe. 2"];
  return (
    <ul>
      {/* <li>{items[0]}</li>
      <li>{items[1]}</li> */}
      <li>
        <TodoListItem />
      </li>
      <li>
        <TodoListItem />
      </li>
    </ul>
  );
};

export default TodoList;
