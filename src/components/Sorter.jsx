export default function Sorter({ list, replaceTasks }) {
  // Methods
  // Inpure (1, 2)
  function sortByName() {
    const clonedList = [...list];

    // Pure
    const sortedList = clonedList.sort((a, b) => {
      const productA = a.name.toUpperCase();
      const productB = b.name.toUpperCase();

      return productA > productB ? 1 : -1;
    });

    replaceTasks(sortedList);
  }

  // Impure (1, 2)
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
