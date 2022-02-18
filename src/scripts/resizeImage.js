export default async function resizeImage(image, width = 100, height = 100) {
  const canvas = document.createElement("canvas");
  const originalContext = canvas.getContext("2d");
  const resizedContext = canvas.getContext("2d");
  const resizedImage = await loadImage(image);
  const newSize = proportionalScaling(resizedImage, width, height);

  originalContext.drawImage(resizedImage, 0, 0);

  canvas.width = newSize.width;
  canvas.height = newSize.height;
  resizedContext.drawImage(resizedImage, 0, 0, newWidth, newHeight);

  return await canvasToPNGImage(canvas);
}

async function loadImage(image) {
  const resizedImage = new Image();
  resizedImage.src = image;

  await new Promise((result) => (resizedImage.onload = result));

  return resizedImage;
}

function proportionalScaling(image, width, height) {
  let newWidth = image.width;
  let newHeight = image.height;

  // Handles the proportion scaling
  if (newWidth > newHeight) {
    if (newWidth > width) {
      newHeight *= width / newWidth;
      newWidth = width;
    }
  } else {
    if (newHeight > height) {
      newWidth *= height / newHeight;
      newHeight = height;
    }
  }

  return { width: newWidth, height: newHeight };
}

async function canvasToPNGImage(canvas) {
  const canvasToDataURL = canvas.toDataURL("image/png");
  const DataURLToBlob = await fetch(canvasToDataURL);
  const result = await DataURLToBlob.blob();

  return result;
}
