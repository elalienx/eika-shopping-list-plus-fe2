// NPM packages
import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext(null);

export function TasksProvider({ storageKey, children }) {
  // Local state
  const [tasks, setTasks] = useState(loadList(storageKey));

  // Property
  const values = { tasks, addItem, editItem, replaceTasks };

  // Methods
  useEffect(() => saveList(tasks, storageKey), [tasks]);

  // Pure
  function loadList(storageKey) {
    const data = localStorage.getItem(storageKey);
    const parseData = JSON.parse(data) || [];

    return parseData;
  }

  // Impure
  function saveList(list, storageKey) {
    const data = JSON.stringify(list);

    localStorage.setItem(storageKey, data);
  }

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

  function replaceTasks(list, newList) {
    const errorText = "The new list is smaller than the old one";

    // Safeguard
    if (newList.length !== list.length) throw new Error(errorText);

    setTasks(newList);
  }

  return <Context.Provider value={values}>{children}</Context.Provider>;
}

// Impure (2)
export function useTasks() {
  const context = useContext(Context);
  const errorText =
    "To use useTasks(), you need to wrap the parent component with <TaskProvider/>";

  // Safeguards
  if (!context) throw new Error(errorText);

  return context;
}
