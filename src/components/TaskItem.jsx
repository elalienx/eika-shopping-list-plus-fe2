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
    // Step 1: Get file
    const file = event.target.files[0]; // instant

    // Step 2: Generate unique filename
    const uniqueId = new Date().getTime(); // instant
    const filename = `thumbnail-${uniqueId}.png`; // instant

    // Step 3: Resize image
    const image = await readFile(file); // either 0.5 or 1 seconds or more???
    const resizedImage = await resizeImage(image, 88, 88);

    // Step 4: Upload the image AND return the URL
    const imageURL = await uploadFile(resizedImage, filename);

    // Step 5: Store the imageURL
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
      {/* Step 6: Display image */}
      <img src={imageURL} alt="Thumbnail of the product" />
    </li>
  );
}
