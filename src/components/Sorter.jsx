export default function Sorter({ list, replaceTasks }) {
  // Methods
  // Inpure (1)
  function sortByName(list) {
    const clonedList = [...list];

    // Pure
    const sortedList = clonedList.sort((a, b) => {
      const productA = a.name.toUpperCase();
      const productB = b.name.toUpperCase();

      return productA > productB ? 1 : -1;
    });

    replaceTasks(list, sortedList);
  }

  // Impure (1)
  function sortByPrice(list) {
    const clonedList = [...list];
    clonedList.sort((a, b) => b.price - a.price);

    replaceTasks(list, clonedList);
  }

  return (
    <section className="sorter">
      Sort by:
      <button onClick={() => sortByName(list)}>Name</button>
      <button onClick={() => sortByPrice(list)}>Price</button>
    </section>
  );
}
