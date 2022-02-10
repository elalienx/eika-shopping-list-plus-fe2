export default function ModalForm({ showModal, setShowModal }) {
  // safeguard
  if (showModal === false) return null;

  return (
    <form>
      <h2>Create item</h2>
      <label>
        Product name
        <input type="text" placeholder="Ex: Chair" />
      </label>
      <label>
        Product price
        <input type="number" placeholder="Ex: 500" />
      </label>
      <button>Submit</button>
      <button>Cancel</button>
    </form>
  );
}
