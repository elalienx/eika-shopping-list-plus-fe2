export default function TaskItem({ item, onCheck }) {
  const { id, name, price, isCompleted } = item;

  return (
    <li>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => onCheck(id)}
      />
      {name}, {price}
    </li>
  );
}
