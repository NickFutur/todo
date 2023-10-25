import React from "react";
import { createRoot } from "react-dom/client";
import AppHeader from "./components/AppHeader";
import SearchPanel from "./components/SearchPanel";
import TodoList from "./components/TodoList";

const root = createRoot(document.getElementById("root"));

const App = () => {
  const todoData = [
    { label: "Plan 1", important: false },
    { label: "Plan 2", important: false },
    { label: "Plan 3", important: true },
  ];
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData} />
    </div>
  );
};

root.render(<App />);
