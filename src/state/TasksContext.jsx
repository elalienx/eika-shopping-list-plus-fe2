// NPM packages
import { createContext, useContext, useState } from "react";

const Context = createContext(null);

// 1. For the parent (or the person will expose the data to everyone else)
export function TasksProvider({ children }) {
  // State
  const [tasks, setTasks] = useState([]);

  // Properties
  const values = {
    tasks,
    addItem,
    editItem,
    replaceTasks,
    temporalReplaceTasks,
  };

  function addItem(name, price) {
    const newItem = {
      id: tasks.length,
      name: name,
      price: price,
      imageURL: "",
      isCompleted: false,
    };

    setTasks([...tasks, newItem]);
  }

  function editItem(editedItem) {
    const clonedList = [...tasks];
    const index = clonedList.findIndex((item) => item.id === editedItem.id);

    clonedList[index] = editedItem;
    setTasks(clonedList);
  }

  function replaceTasks(newTasks) {
    const errorText = "The new list is smaller than the old one";

    // Safeguard
    if (newTasks.length !== tasks.length) throw new Error(errorText);

    setTasks(newTasks);
  }

  function temporalReplaceTasks(newTasks) {
    setTasks(newTasks)
  }

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
