// Pure
export default function validateName(string) {
  const parsedString = string.trim();
  let data = "";
  let error = "";

  if (parsedString.length > 0) {
    data = parsedString;
    error = "";
  } else {
    data = "";
    error = "The product name must not be empty";
  }

  return { data: data, error: error };
}
