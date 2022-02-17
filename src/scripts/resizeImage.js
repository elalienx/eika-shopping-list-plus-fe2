export default async function resizeImage(image, width, height) {
  const originalImage = await loadImage(image);
  const newSize = proportionalScale(originalImage, width, height);
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  canvas.width = newSize.width;
  canvas.height = newSize.height;
  context.drawImage(originalImage, 0, 0, newSize.width, newSize.height);

  return await canvasToPNGFile(canvas);
}

function proportionalScale(image, width, height) {
  let newWidth = image.width;
  let newHeight = image.height;

  if (newWidth > newHeight) {
    newHeight *= width / newWidth;
    newWidth = width;
  } else {
    newWidth *= height / newHeight;
    newHeight = height;
  }

  return { width: newWidth, height: newHeight };
}

async function loadImage(image) {
  const newImage = new Image();
  newImage.src = image;

  // to force the machine to wait until the image loading is done
  await new Promise((result) => (newImage.onload = result));

  return newImage;
}

async function canvasToPNGFile(canvas) {
  const canvasToDataURL = canvas.toDataURL("image/png");
  const DataURLToBlob = await fetch(canvasToDataURL);
  const BlobToFile = await DataURLToBlob.blob();

  return BlobToFile;
}
