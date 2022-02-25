// NPM packages
import { createContext, useState, useContext } from "react";

const Context = createContext(null);

export function TaskProvider({ children }) {
  // State
  const [tasks, setTasks] = useState([]);

  // Properties
  const values = { tasks };

  return <Context.Provider value={values}>{children}</Context.Provider>;
}

export function useTasks() {
  const context = useContext(Context);
  const errorText =
    "To use useTasks(), you need to wrap the parent component with <TaskProvider/>";

  // Safeguards
  if (!context) throw new Error(errorText);

  return context;
}
