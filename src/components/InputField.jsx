export default function InputField({ data, state, error, onValidate }) {
  const { label, type, placeholder, required, autoFocus } = data;
  const [getter, setter] = state;

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
      {error && <small>{error}</small>}
    </label>
  );
}
