// NPM package
import { useState } from "react";

// Project file
import form from "../data/form.json";
import validateName from "../scripts/validating-form/validateName";
import validatePrice from "../scripts/validating-form/validatePrice";
import InputField from "./InputField";
import { useTasks } from "../state/TasksContext";

export default function ModalForm({ modalState }) {
  const { addItem } = useTasks();

  const [showModal, setShowModal] = modalState;

  // Local state
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // Methods
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

  // Safeguard
  if (showModal === false) return null;

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <h2>Create item</h2>
      <InputField
        settings={form.name}
        state={[name, setName]}
        validation={validateName}
      />
      <InputField
        settings={form.price}
        state={[price, setPrice]}
        validation={validatePrice}
      />
      <button>Submit</button>
      <button onClick={resetForm}>Cancel</button>
    </form>
  );
}
