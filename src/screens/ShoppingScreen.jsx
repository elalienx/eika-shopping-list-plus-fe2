export default function ShoppingScreen({ list, setShowModal }) {
  const TasksItems = list.map((item) => (
    <li key={item.id}>
      {item.name}, {item.price}
    </li>
  ));

  return (
    <div>
      <h1>Shopping list</h1>
      <ul>{TasksItems}</ul>
      <button onClick={() => setShowModal(true)}>Add item</button>
    </div>
  );
}
