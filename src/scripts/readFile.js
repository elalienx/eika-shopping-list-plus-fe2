export default async function readFile(file) {
  const reader = new FileReader();

  const result = await new Promise((resolve) => {
    reader.readAsDataURL(file);
    reader.onload = (event) => resolve(event.target.result);
  });

  return result;
}
