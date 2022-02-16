export default function TaskItem({ item, editList }) {
  const { id, name, price, isCompleted } = item;

  // Methods
  function onCheck() {
    const clonedItem = { ...item };

    clonedItem.isCompleted = !clonedItem.isCompleted;
    editList(clonedItem);
  }

  function onAddImage() {
    // something...

    editList(item);
  }

  return (
    <li>
      <input type="checkbox" checked={isCompleted} onChange={onCheck} />
      {name}, {price}
    </li>
  );
}
