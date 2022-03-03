// NPM packages
import { useState } from "react";

// Project files
import TaskList from "../components/TaskList";
import Sorter from "../components/Sorter";
import { useTasks } from "../state/TasksContext";

export default function ShoppingScreen({ setModal }) {
  const { tasks, replaceTasks } = useTasks();

  // Local state
  const [showCompleted, setShowCompleted] = useState(false);

  // Properties
  const completedItems = tasks.filter((item) => item.isCompleted === true);
  const pendingItems = tasks.filter((item) => item.isCompleted === false);
  const toggleLabel = showCompleted ? "Hide" : "View";

  return (
    <div>
      <h1>Shopping list</h1>
      <Sorter list={tasks} replaceTasks={replaceTasks} />
      <TaskList list={pendingItems} />
      <button
        className="button-primary"
        onClick={() => setModal(<span>bye!!</span>)}
      >
        Add item
      </button>
      <button onClick={() => setShowCompleted(!showCompleted)}>
        {toggleLabel} completed items
      </button>
      {showCompleted && <TaskList list={completedItems} />}
    </div>
  );
}
