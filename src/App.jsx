// NPM packages
import { useEffect, useState } from "react";

// Project files
import ModalForm from "./components/ModalForm";
import ShoppingScreen from "./screens/ShoppingScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { useTasks } from "./state/TasksContext";
import Logo from "./assets/logo.png";
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
      <header className="header">
        <img src={Logo} alt="The words EIKA behind a circle background" />
      </header>
      {tasks.length === 0 && <WelcomeScreen setShowModal={setShowModal} />}
      {tasks.length > 0 && <ShoppingScreen setShowModal={setShowModal} />}

      <ModalForm modalState={[showModal, setShowModal]} />
    </div>
  );
}
