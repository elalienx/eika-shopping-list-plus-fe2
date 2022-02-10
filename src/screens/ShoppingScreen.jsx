export default function ShoppingScreen({ setShowModal }) {
  return (
    <div>
      <h1>Shopping list</h1>
      <button onClick={() => setShowModal(true)}>Add item</button>
    </div>
  );
}
