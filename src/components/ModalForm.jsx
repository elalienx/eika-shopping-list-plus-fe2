// NPM package
import { useState } from "react";

export default function ModalForm({ modalState, addItem }) {
  const [showModal, setShowModal] = modalState;

  // Local state
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // Methods
  // The goal of the submit function is to send data elsewhere (submit it)
  function onSubmit(event) {
    event.preventDefault();

    addItem(name, price);
    resetForm();
  }

  function resetForm() {
    setName("");
    setPrice("");
    setShowModal(false);
  }

  function validateName() {
    const parsedName = name.trim();

    if (parsedName.length > 0) {
      // "abc".legth = 3
      setName(parsedName);
    } else {
      alert("The product name must not be empty");
      setName("");
    }
  }

  function validatePrice() {
    const parsePrice = Number(price.trim());

    if (parsePrice > 0) {
      setPrice(parsePrice);
    } else {
      alert("The price must cost more than 0");
      setPrice("");
    }
  }

  // Safeguard
  if (showModal === false) return null;

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <h2>Create item</h2>
      <label>
        Product name
        <input
          type="text"
          placeholder="Ex: Chair"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          onBlur={validateName}
        />
      </label>
      <label>
        Product price
        <input
          type="number"
          placeholder="Ex: 500"
          required
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          onBlur={validatePrice}
        />
      </label>
      <button>Submit</button>
      <button onClick={resetForm}>Cancel</button>
    </form>
  );
}
