// Project files
import readFile from "../scripts/upload-image/readFile";
import resizeImage from "../scripts/upload-image/resizeImage";
import { uploadFile } from "../scripts/upload-image/cloudStorage";
import { useTasks } from "../state/TasksContext";

export default function TaskItem({ item }) {
  const { editItem } = useTasks();
  const { name, price, imageURL, isCompleted } = item;

  // Methods
  function onCheck() {
    const clonedItem = { ...item };

    clonedItem.isCompleted = !clonedItem.isCompleted;
    editItem(clonedItem);
  }

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
    <li>
      <input type="checkbox" checked={isCompleted} onChange={onCheck} />
      {name}, {price}
      <input
        type="file"
        accept="image/png, image/jpeg"
        onChange={(event) => onAddImage(event)}
      />
      <img src={imageURL} alt="Thumbnail of the product" />
    </li>
  );
}
