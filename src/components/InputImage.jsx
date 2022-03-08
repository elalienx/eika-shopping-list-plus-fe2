// Project files
import imagePlaceholder from "../assets/image-placeholder.png";

export default function InputImage({ imageURL, onAddImage }) {
  // Property
  const image = imageURL === "" ? imagePlaceholder : imageURL;

  return (
    <label className="input-image">
      <input
        type="file"
        accept="image/png, image/jpeg"
        onChange={(event) => onAddImage(event)}
      />
      <img src={image} alt="Thumbnail of the product" />
    </label>
  );
}
