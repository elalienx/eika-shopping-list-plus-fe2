// Project files
import readFile from "../scripts/readFile";
import resizeImage from "../scripts/resizeImage";

export default function TaskItem({ item, editList }) {
  const { id, name, price, isCompleted } = item;

  // Methods
  function onCheck() {
    const clonedItem = { ...item };

    clonedItem.isCompleted = !clonedItem.isCompleted;
    editList(clonedItem);
  }

  async function onAddImage(event) {
    // Step 1
    const file = event.target.files[0]; // instant

    // Step 2
    const uniqueId = new Date().getTime(); // instant
    const filename = `thumbnail-${uniqueId}.png`; // instant

    // Step 3
    const image = await readFile(file); // either 0.5 or 1 seconds or more???
    const resizedImage = await resizeImage(image, 88, 88);

    // Step 4
    const imageURL = await uploadImage(resizedImage, filename)
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
    </li>
  );
}
