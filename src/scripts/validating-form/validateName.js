// Pure
export default function validateName(string) {
  const parsedString = string.trim();
  const validation = parsedString.length > 0;
  const data = validation ? parsedString : "";
  const error = validation ? "" : "The product name must not be empty";

  return { data: data, error: error };
}
