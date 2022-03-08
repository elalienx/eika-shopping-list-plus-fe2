export default function InputCheckbox({ checked, onChange }) {
  // Note: Install a screen reader because the div role could remove not only the input, but also the label.
  return (
    <label className="input-checkbox">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <div className={`icon-checkmark ${checked && "checked"}`} />
    </label>
  );
}
