import React from "react";
import TodoListItem from "./TodoListItem";
const TodoList = ({ todos }) => {
  const listElements = todos.map((item) => {
    return (
      <li>
        {/* <TodoListItem label={item.label} important={item.important} /> */}
        <TodoListItem {...item} />{" "}
        {/*это Spread операция, которую можно записать, как в примере выше, но этот метод короче + названия ключей совпадают (label и label)*/}
      </li>
    );
  });
  return <ul>{listElements}</ul>;
};

export default TodoList;
