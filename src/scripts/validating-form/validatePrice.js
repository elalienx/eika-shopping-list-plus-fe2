// Pure
export default function validatePrice(number) {
  const parseNumber = Number(number.trim());
  const validation = parseNumber > 0;
  const data = validation ? parseNumber : "";
  const error = validation ? "" : "The price must cost more than 0";

  return { data: data, error: error };
}


