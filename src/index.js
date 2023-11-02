import React from "react";
import { createRoot } from "react-dom/client";
import AppHeader from "./components/AppHeader";
import SearchPanel from "./components/SearchPanel";
import TodoList from "./components/TodoList";
import ItemStatusFilter from "./components/ItemStatusFilter";
import "./index.css";

const root = createRoot(document.getElementById("root"));

const App = () => {
  const todoData = [
    { label: "Plan 1", important: false, id: 1 },
    { label: "Plan 2", important: false, id: 2 },
    { label: "Plan 3", important: true, id: 3 },
  ];
  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="d-flex top-panel">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todoData} />
    </div>
  );
};

root.render(<App className="root" />);
