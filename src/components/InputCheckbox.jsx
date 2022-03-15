export default function InputCheckbox({ checked, onChange }) {
  return (
    <label className="input-checkbox">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <div className={`icon-checkmark ${checked && "checked"}`} />
    </label>
  );
}
