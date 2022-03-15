// NPM packages
import { useState } from "react";

// Project files
import Modal from "./components/Modal";
import ShoppingScreen from "./screens/ShoppingScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { useTasks } from "./state/TasksContext";
import Logo from "./assets/logo.png";
import "./styles/style.css";

export default function App() {
  const { tasks } = useTasks();

  // Local state
  const [modal, setModal] = useState(null);

  return (
    <div className="App">
      <header className="header">
        <img src={Logo} alt="The words EIKA behind a circle background" />
      </header>
      {tasks.length === 0 && <WelcomeScreen setModal={setModal} />}
      {tasks.length > 0 && <ShoppingScreen setModal={setModal} />}

      <Modal modalState={[modal, setModal]} />
    </div>
  );
}
