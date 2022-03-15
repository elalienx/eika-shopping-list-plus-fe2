// NPM package
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Impure
export async function uploadFile(cloudReference, file, filename) {
  const fileReference = ref(cloudReference, filename);
  await uploadBytes(fileReference, file);

  return await getDownloadURL(fileReference);
}
