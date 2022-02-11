export default function TaskItem({ item }) {
  return (
    <li>
      {item.name}, {item.price}
    </li>
  );
}
