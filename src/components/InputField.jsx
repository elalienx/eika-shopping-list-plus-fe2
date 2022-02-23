import { useState } from "react";

export default function InputField({ settings, state, validation }) {
  const { label, type, placeholder, required, autoFocus } = settings;
  const [getter, setter] = state;

  // Local state
  const [errorMessage, setErrorMessage] = useState("");

  // Methods
  function onValidate() {
    // Safeguard
    if (validation === undefined) return;

    const result = validation(getter);

    setter(result.data);
    setErrorMessage(result.error);
  }

  return (
    <label>
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
      {errorMessage && <small style={{ color: "red" }}>{errorMessage}</small>}
    </label>
  );
}
