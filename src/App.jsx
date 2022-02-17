// NPM packages
import { useEffect, useState } from "react";

// Project files
import ModalForm from "./components/ModalForm";
import ShoppingScreen from "./screens/ShoppingScreen";
import WelcomeScreen from "./screens/WelcomeScreen";

export default function App() {
  /**
   * Local and Global state "update" the page when they change.
   * Properties don't.
   */
  // Local state
  const [list, setList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Global state
  /** We don't have global state in this project */

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

  function addItem(name, price) {
    const newItem = {
      id: list.length,
      name: name,
      price: price,
      imageURL: "",
      isCompleted: false,
    };

    setList([...list, newItem]);
  }

  // Components
  /**
   * App.jsx does not have components create directly here.
   * Always try to extract this components into separate files.
   */

  return (
    <div className="App">
      {list.length === 0 && <WelcomeScreen setShowModal={setShowModal} />}
      {list.length > 0 && (
        <ShoppingScreen
          listState={[list, setList]}
          setShowModal={setShowModal}
        />
      )}

      <ModalForm modalState={[showModal, setShowModal]} addItem={addItem} />
    </div>
  );
}
