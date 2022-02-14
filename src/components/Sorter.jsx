export default function Sorter({ list, setList }) {
  // Methods
  function sortByName() {}

  function sortByPrice() {}

  return (
    <section>
      Sort by:
      <button onClick={sortByName}>Name</button>
      <button onClick={sortByPrice}>Price</button>
    </section>
  );
}
