// NPM packages
import React from "react";
import ReactDOM from "react-dom";

// Project files
import App from "./App";
import { TasksProvider } from "./state/TaskContext";

ReactDOM.render(
  <React.StrictMode>
    <TasksProvider>
      <App />
    </TasksProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
