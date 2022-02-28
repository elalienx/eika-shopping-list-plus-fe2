// NPM packages
import { createContext, useState, useContext } from "react";

const Context = createContext(null);

// 1. For the parent (or the person will expose the data to everyone else)
export function TaskProvider({ children }) {
  // State
  const [tasks, setTasks] = useState([]);

  // Property
  const values = { tasks } 

  // Methods
  /**
   * 1. load tasks from localstorage
   * 2. save tasks from localstorage
   * 3. add item to tasks
   * 4. edit list
   * 5. sort by name * (replace list)
   * 6. sort by price * (replace list)
   */

  return <Context.Provider value={values}>{children}</Context.Provider>;
}

// 2. For the children that wants to use the data.
export function useTasks() {
  const context = useContext(Context);
  const errorText =
    "To use useTasks(), you need to wrap the parent component with <TaskProvider/>";

  // Safeguards
  if (!context) throw new Error(errorText);

  return context;
}
