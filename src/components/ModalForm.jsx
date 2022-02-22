// NPM package
import { useState } from "react";

// Project file
import form from "../data/form.json";
import validateString from "../scripts/validating-form/validateString";
import InputField from "./InputField";

export default function ModalForm({ modalState, addItemToList }) {
  const [showModal, setShowModal] = modalState;

  // Local state
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorPrice, setErrorPrice] = useState("");

  // Methods
  function onSubmit(event) {
    event.preventDefault();

    addItemToList(name, price);
    resetForm();
  }

  function resetForm() {
    setName("");
    setPrice("");
    setShowModal(false);
  }

  function validateName() {
    const validation = validateString(name);

    setName(validation.data);
    setErrorName(validation.error);
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
      <InputField
        data={form.name}
        state={[name, setName]}
        error={errorName}
        onValidate={validateName}
      />

      <InputField
        data={form.price}
        state={[price, setPrice]}
        error={errorPrice}
        onValidate={validatePrice}
      />

      <button>Submit</button>
      <button onClick={resetForm}>Cancel</button>
    </form>
  );
}
