// NPM packages
import { useState } from "react";

// Project files
import TaskList from "../components/TaskList";
import Sorter from "../components/Sorter";

export default function ShoppingScreen({ list, setList, setShowModal }) {
  // Local state
  const [showCompleted, setShowCompleted] = useState(false);

  // Properties
  const completedItems = list.filter((item) => item.isCompleted === true);
  const pendingItems = list.filter((item) => item.isCompleted === false);
  const toggleLabel = showCompleted ? "Hide" : "View";

  // Methods
  function editList(editedItem) {
    const clonedList = [...list];
    const index = clonedList.findIndex((item) => item.id === editedItem.id);

    clonedList[index] = editedItem;
    setList(clonedList);
  }

  return (
    <div>
      <h1>Shopping list</h1>
      <Sorter list={list} setList={setList} />
      <TaskList list={pendingItems} editList={editList} />
      <button onClick={() => setShowModal(true)}>Add item</button>
      <button onClick={() => setShowCompleted(!showCompleted)}>
        {toggleLabel} completed items
      </button>
      {showCompleted && <TaskList list={completedItems} editList={editList} />}
    </div>
  );
}
