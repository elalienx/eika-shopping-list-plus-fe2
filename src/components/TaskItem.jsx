export default function TaskItem({ item }) {
  const { name, price } = item;

  return (
    <li>
      {name}, {price}
    </li>
  );
}
