// NPM packages
import React from "react";
import ReactDOM from "react-dom";

// Project files
import App from "./App";
import { TasksProvider } from "./state/TasksContext";

ReactDOM.render(
  <React.StrictMode>
    <TasksProvider storageKey={"todo-list"}>
      <App />
    </TasksProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
