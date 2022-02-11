// Project files
import TaskItem from "../components/TaskItem";

export default function ShoppingScreen({ list, setList, setShowModal }) {
  // Methods
  function onCheck(id) {
    const clonedList = [...list];
    const index = clonedList.findIndex((item) => item.id === id);
    const editedItem = clonedList[index];

    editedItem.isCompleted = !editedItem.isCompleted;
    setList(clonedList);
  }

  // Component
  const TasksItems = list.map((item) => (
    <TaskItem key={item.id} item={item} onCheck={onCheck} />
  ));

  return (
    <div>
      <h1>Shopping list</h1>
      <ul>{TasksItems}</ul>
      <button onClick={() => setShowModal(true)}>Add item</button>
    </div>
  );
}
