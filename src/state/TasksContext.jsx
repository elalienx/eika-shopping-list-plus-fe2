// NPM packages
import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext(null);

export function TasksProvider({ children }) {
  // State
  const [tasks, setTasks] = useState([]);

  // Properties
  const values = { tasks, addItem, editItem, replaceTasks };
  const storageKey = "eika-fe2";

  // Methods
  useEffect(() => loadList(), []);
  useEffect(() => saveList(), [tasks]);

  function loadList() {
    const data = localStorage.getItem(storageKey);
    const parseData = JSON.parse(data) || [];

    setTasks(parseData);
  }

  function saveList() {
    const data = JSON.stringify(tasks);

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

  function replaceTasks(newTasks) {
    const errorText = "The new list is smaller than the old one";

    // Safeguard
    if (newTasks.length !== tasks.length) throw new Error(errorText);

    setTasks(newTasks);
  }

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
