// NPM packages
import { useState } from "react";

// Project files
import ModalForm from "./components/ModalForm";
import ShoppingScreen from "./screens/ShoppingScreen";
import WelcomeScreen from "./screens/WelcomeScreen";

export default function App() {
  // Local state
  const [list, setList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Methods
  function onAddItem() {
    
  }

  return (
    <div className="App">
      {list.length === 0 && <WelcomeScreen setShowModal={setShowModal} />}
      {list.length > 0 && <ShoppingScreen />}

      <ModalForm showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}
