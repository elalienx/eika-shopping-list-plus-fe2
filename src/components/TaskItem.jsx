// Project files
import InputCheckbox from "./InputCheckbox";
import InputImage from "./InputImage";
import readFile from "../scripts/resize-image/readFile";
import resizeImage from "../scripts/resize-image/resizeImage";
import { uploadFile } from "../scripts/firebase/cloudStorage";
import { cloudReference } from "../scripts/firebase/firebase";
import { useTasks } from "../state/TasksContext";

export default function TaskItem({ item }) {
  const { editItem } = useTasks();
  const { name, price, imageURL, isCompleted } = item;

  // Methods
  // Impure (1)
  function onCheck(item, editItem) {
    const clonedItem = { ...item };

    clonedItem.isCompleted = !clonedItem.isCompleted;
    editItem(clonedItem);
  }

  // Impure (1, 4)
  async function onAddImage(event, item, editItem) {
    const file = event.target.files[0];
    const uniqueId = new Date().getTime();
    const filename = `thumbnail-${uniqueId}.png`;
    const image = await readFile(file);
    const resizedImage = await resizeImage(image, 88, 88);
    const imageURL = await uploadFile(cloudReference, resizedImage, filename);
    const clonedItem = { ...item };

    clonedItem.imageURL = imageURL;
    editItem(clonedItem);
  }

  return (
    <li className={`task-item ${isCompleted && "completed"}`}>
      <InputCheckbox
        checked={isCompleted}
        onChange={() => onCheck(item, editItem)}
      />
      <span className="name">{name}</span>
      <span className="spacer">{/* to align items leave at blank */}</span>
      <span className="price">{price}:-</span>
      <InputImage
        imageURL={imageURL}
        onAddImage={(event) => onAddImage(event, item, editItem)}
      />
    </li>
  );
}
