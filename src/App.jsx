// NPM packages
import { useEffect, useState } from "react";

// Project files
import ModalForm from "./components/ModalForm";
import ShoppingScreen from "./screens/ShoppingScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { useTasks } from "./state/TasksContext";
import "./styles/style.css";

export default function App() {
  const { tasks, temporalReplaceTasks } = useTasks();

  // Local state
  const [showModal, setShowModal] = useState(false);

  // Properties
  const storageKey = "eika-tasks";

  // Methods
  useEffect(() => loadData(), []);
  useEffect(() => saveData(), [tasks]);

  function loadData() {
    const data = localStorage.getItem(storageKey);
    const parseData = JSON.parse(data) || [];

    temporalReplaceTasks(parseData);
  }

  function saveData() {
    const data = JSON.stringify(tasks);

    localStorage.setItem(storageKey, data);
  }

  return (
    <div className="App">
      {/* {tasks.length === 0 && <WelcomeScreen setShowModal={setShowModal} />}
      {tasks.length > 0 && <ShoppingScreen setShowModal={setShowModal} />}
     
      <ModalForm modalState={[showModal, setShowModal]} /> */}

      {/* Style test */}
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <small>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </small>
      <small>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </small>
      <br />
      <label>Label</label>
    </div>
  );
}
