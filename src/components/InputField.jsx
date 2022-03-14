import { useState } from "react";

export default function InputField({ settings, state, validation }) {
  const { label, type, placeholder, required, autoFocus } = settings;
  const [getter, setter] = state;

  // Local state
  const [errorMessage, setErrorMessage] = useState("");

  // Methods
  // Inpure (1, 2)
  function onValidate() {
    // Safeguard
    if (validation === undefined) return;

    const result = validation(getter);

    setter(result.data);
    setErrorMessage(result.error);
  }

  return (
    <label className="input-field">
      {label}
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        autoFocus={autoFocus}
        value={getter}
        onChange={(event) => setter(event.target.value)}
        onBlur={onValidate}
      />
      <small>{errorMessage}</small>
    </label>
  );
}
