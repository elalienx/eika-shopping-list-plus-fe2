// NPM packages
import { useState } from "react";

// Project files
import TaskItem from "../components/TaskItem";
import Sorter from "../components/Sorter";

export default function ShoppingScreen({ list, setList, setShowModal }) {
  // Local state
  const [showCompleted, setShowCompleted] = useState(false);

  // Properties
  const completedItems = list.filter((item) => item.isCompleted === true);
  const pendingItems = list.filter((item) => item.isCompleted === false);
  const toggleLabel = showCompleted ? "Hide" : "View";

  // Methods
  function onCheck(id) {
    const clonedList = [...list];
    const index = clonedList.findIndex((item) => item.id === id);
    const editedItem = clonedList[index];

    editedItem.isCompleted = !editedItem.isCompleted;
    setList(clonedList);
  }

  // Component
  const CompletedItems = completedItems.map((item) => (
    <TaskItem key={item.id} item={item} onCheck={onCheck} />
  ));

  const PendingItems = pendingItems.map((item) => (
    <TaskItem key={item.id} item={item} onCheck={onCheck} />
  ));

  return (
    <div>
      <h1>Shopping list</h1>
      <Sorter list={list} setList={setList} />
      <ul>{PendingItems}</ul>
      <button onClick={() => setShowModal(true)}>Add item</button>
      <button onClick={() => setShowCompleted(!showCompleted)}>
        {toggleLabel} completed items
      </button>
      {showCompleted && <ul>{CompletedItems}</ul>}
    </div>
  );
}
