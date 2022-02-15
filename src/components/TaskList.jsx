// Project files
import TaskItem from "./TaskItem";

export default function TaskList({ list, onCheck }) {
  // Methods
  function onCheck() {
    // something
    
    editList(item)
  }

  function onAddImage() {
    // something...

    editList(item)
  }


  const TaskItems = list.map((item) => (
    <TaskItem key={item.id} item={item} onCheck={onCheck} />
  ));

  // Safeguards
  if (list.length === 0) return <p>No items to show...</p>;

  return <ul>{TaskItems}</ul>;
}
