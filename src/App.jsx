// NPM packages
import { useEffect, useState } from "react";

// Project files
import ModalForm from "./components/ModalForm";
import ShoppingScreen from "./screens/ShoppingScreen";
import WelcomeScreen from "./screens/WelcomeScreen";

export default function App() {
  // Local state
  const [list, setList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Properties
  const storageKey = "todo-list";

  // Methods
  useEffect(() => loadData(), []);
  useEffect(() => saveData(), [list]);

  function loadData() {
    const data = localStorage.getItem(storageKey);
    const parseData = JSON.parse(data) || [];

    setList(parseData);
  }

  function saveData() {
    const data = JSON.stringify(list);

    localStorage.setItem(storageKey, data);
  }

  function addItemToList(name, price) {
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
      {list.length > 0 && (
        <ShoppingScreen
          listState={[list, setList]}
          setShowModal={setShowModal}
        />
      )}

      <ModalForm
        modalState={[showModal, setShowModal]}
        addItemToList={addItemToList}
      />
    </div>
  );
}
