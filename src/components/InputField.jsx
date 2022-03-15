import { useState } from "react";

export default function InputField({ settings, state, validation }) {
  const { label, type, placeholder, required, autoFocus } = settings;
  const [getter, setter] = state;

  // Local state
  const [errorMessage, setErrorMessage] = useState("");

  // Methods
  // Inpure (1)
  function onValidate(callback, setState, setError) {
    // Safeguard
    if (callback === undefined) return;

    const result = callback(getter);

    setState(result.data);
    setError(result.error);
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
        onBlur={() => onValidate(validation, setter, setErrorMessage)}
      />
      <small>{errorMessage}</small>
    </label>
  );
}
