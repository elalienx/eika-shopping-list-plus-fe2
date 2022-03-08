// NPM packages
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";

// Project files
import TaskList from "../components/TaskList";
import Sorter from "../components/Sorter";
import ModalForm from "../components/ModalForm";
import { useTasks } from "../state/TasksContext";

export default function ShoppingScreen({ setModal }) {
  const { tasks, replaceTasks } = useTasks();

  // Local state
  const [showCompleted, setShowCompleted] = useState(false);

  // Properties
  const completedItems = tasks.filter((item) => item.isCompleted === true);
  const pendingItems = tasks.filter((item) => item.isCompleted === false);
  const toggleLabel = showCompleted ? "Hide" : "View";
  const toggleIcon = showCompleted ? faEyeSlash : faEye;

  return (
    <div id="shopping-screen">
      <h1>Shopping list</h1>
      <Sorter list={tasks} replaceTasks={replaceTasks} />
      <TaskList list={pendingItems} />
      <div className="main-buttons">
        <button
          className="button-primary"
          onClick={() => setModal(<ModalForm setModal={setModal} />)}
        >
          Add item
        </button>
        <button
          className="button-icon"
          onClick={() => setShowCompleted(!showCompleted)}
        >
          <FontAwesomeIcon icon={toggleIcon} />
          {toggleLabel} completed items
        </button>
      </div>
      {showCompleted && <TaskList list={completedItems} />}
    </div>
  );
}
