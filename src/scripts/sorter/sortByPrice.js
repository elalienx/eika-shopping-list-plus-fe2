// Pure
export default function sortByPrice(list) {
  const clonedList = [...list];
  const sortedList = clonedList.sort((a, b) => b.price - a.price);

  return sortedList;
}
