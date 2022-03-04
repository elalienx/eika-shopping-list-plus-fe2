export default function Sorter({ list, replaceTasks }) {
  // Methods
  function sortByName() {
    const clonedList = [...list];
    const sortedList = clonedList.sort((a, b) => {
      const productA = a.name.toUpperCase();
      const productB = b.name.toUpperCase();

      return productA > productB ? 1 : -1;
    });

    replaceTasks(sortedList);
  }

  function sortByPrice() {
    const clonedList = [...list];
    clonedList.sort((a, b) => b.price - a.price);

    replaceTasks(clonedList);
  }

  return (
    <section className="sorter">
      Sort by:
      <button onClick={sortByName}>Name</button>
      <button onClick={sortByPrice}>Price</button>
    </section>
  );
}
