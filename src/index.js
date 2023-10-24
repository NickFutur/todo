import React from "react";
// import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
// const rootElement = document.getElementById("root");
// const root = createRoot(el, rootElement);
import AppHeader from "./components/AppHeader";
import SearchPanel from "./components/SearchPanel";
import TodoList from "./components/TodoList";

const root = createRoot(document.getElementById("root"));

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};

root.render(<App />);
