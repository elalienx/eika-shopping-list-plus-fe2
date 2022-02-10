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
  function onAddItem(name, price) {
    const newItem = {
      id: list.length,
      name: name,
      price: price,
      imageURL: "",
      isCompleted: false,
    };

    setList([...list, newItem]);
  }

  return (
    <div className="App">
      {list.length === 0 && <WelcomeScreen setShowModal={setShowModal} />}
      {list.length > 0 && <ShoppingScreen setShowModal={setShowModal} />}

      <ModalForm
        showModal={showModal}
        setShowModal={setShowModal}
        onAddItem={onAddItem}
      />
    </div>
  );
}
