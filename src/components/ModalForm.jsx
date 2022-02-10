// NPM package
import { useState } from "react";

export default function ModalForm({ showModal, setShowModal, onAddItem }) {
  // Local state
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // Methods
  function onSubmit(event) {
    event.preventDefault();

    onAddItem(name, price);
    setShowModal(false);
  }

  // Safeguard
  if (showModal === false) return null;

  return (
    <form>
      <h2>Create item</h2>
      <label>
        Product name
        <input
          type="text"
          placeholder="Ex: Chair"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label>
        Product price
        <input
          type="number"
          placeholder="Ex: 500"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
      </label>
      <button onClick={(event) => onSubmit(event)}>Submit</button>
      <button onClick={() => setShowModal(false)}>Cancel</button>
    </form>
  );
}
