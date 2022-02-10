export default function ModalForm() {
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
