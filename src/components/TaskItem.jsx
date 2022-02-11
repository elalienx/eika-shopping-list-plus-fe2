export default function TaskItem({ item, onCheck }) {
  const { id, name, price, isCompleted } = item;

  return (
    <li>
      <input type="checkbox" value={isCompleted} onChange={() => onCheck(id)} />
      <b>{id}.- </b>
      {name}, {price}
    </li>
  );
}
