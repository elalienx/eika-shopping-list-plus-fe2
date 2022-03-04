// Project files
import TaskItem from "./TaskItem";

export default function TaskList({ list }) {
  // Components
  const TaskItems = list.map((item) => <TaskItem key={item.id} item={item} />);

  // Safeguards
  if (list.length === 0) return <p>No items to show...</p>;

  return <ul className="task-list">{TaskItems}</ul>;
}
