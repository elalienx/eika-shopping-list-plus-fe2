// NPM package
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Project files
import { cloudStorageReference } from "./firebase";

// Impure
/**
 * 1. always return something ✅
 * 2. only use data from argument ❌
 * 3. overriden a value from outside ❌
 * 4. functions inside comply with rule 1-3 ✅
 */
export async function uploadFile(file, filename) {
  const fileReference = ref(cloudStorageReference, filename);
  await uploadBytes(fileReference, file);

  return await getDownloadURL(fileReference);
}
