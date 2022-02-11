// Project files
import TaskItem from "../components/TaskItem";

export default function ShoppingScreen({ list, setShowModal }) {
  const TasksItems = list.map((item) => <TaskItem key={item.id} item={item} />);

  return (
    <div>
      <h1>Shopping list</h1>
      <ul>{TasksItems}</ul>
      <button onClick={() => setShowModal(true)}>Add item</button>
    </div>
  );
}
