export default function TaskItem({ item }) {
  const { name, price, isCompleted } = item;

  return (
    <li>
      <input type="checkbox" value={isCompleted} onChange={} />
      {name}, {price}
    </li>
  );
}
