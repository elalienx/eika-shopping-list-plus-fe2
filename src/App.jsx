// NPM packages
import { useState } from "react";

// Project files
import ModalForm from "./components/ModalForm";
import ShoppingScreen from "./screens/ShoppingScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { useTasks } from "./state/TasksContext";

export default function App() {
  const { tasks } = useTasks();

  // Local state
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      {tasks.length === 0 && <WelcomeScreen setShowModal={setShowModal} />}
      {tasks.length > 0 && <ShoppingScreen setShowModal={setShowModal} />}

      <ModalForm modalState={[showModal, setShowModal]} />
    </div>
  );
}
