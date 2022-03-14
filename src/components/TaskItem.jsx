// Project files
import InputCheckbox from "./InputChecbox";
import InputImage from "./InputImage";
import readFile from "../scripts/upload-image/readFile";
import resizeImage from "../scripts/upload-image/resizeImage";
import { uploadFile } from "../scripts/upload-image/cloudStorage";
import { useTasks } from "../state/TasksContext";

export default function TaskItem({ item }) {
  const { editItem } = useTasks();
  const { name, price, imageURL, isCompleted } = item;

  // Methods
  // Impure (1, 2)
  function onCheck() {
    const clonedItem = { ...item };

    clonedItem.isCompleted = !clonedItem.isCompleted;
    editItem(clonedItem);
  }

  // Impure (1, 2, 3)
  async function onAddImage(event) {
    const file = event.target.files[0];
    const uniqueId = new Date().getTime();
    const filename = `thumbnail-${uniqueId}.png`;
    const image = await readFile(file);
    const resizedImage = await resizeImage(image, 88, 88);
    const imageURL = await uploadFile(resizedImage, filename);
    const clonedItem = { ...item };

    clonedItem.imageURL = imageURL;
    editItem(clonedItem);
  }

  return (
    <li className={`task-item ${isCompleted && "completed"}`}>
      <InputCheckbox checked={isCompleted} onChange={onCheck} />
      <span className="name">{name}</span>
      <span className="spacer">{/* to align items leave at blank */}</span>
      <span className="price">{price}:-</span>
      <InputImage imageURL={imageURL} onAddImage={onAddImage} />
    </li>
  );
}
