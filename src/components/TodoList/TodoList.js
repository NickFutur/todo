import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import "./TodoList.css";
const TodoList = ({ todos }) => {
  const listElements = todos.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        {/* <TodoListItem label={item.label} important={item.important} /> */}
        <TodoListItem {...itemProps} />{" "}
        {/*это Spread операция, которую можно записать, как в примере выше, но этот метод короче + названия ключей совпадают (label и label)*/}
      </li>
    );
  });
  return <ul className="list-group todo-list">{listElements}</ul>;
};

export default TodoList;
