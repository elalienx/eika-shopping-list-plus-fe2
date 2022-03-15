// Project files
import sortByName from "../scripts/sorter/sortByName";
import sortByPrice from "../scripts/sorter/sortByPrice";

export default function Sorter({ list, replaceTasks }) {
  return (
    <section className="sorter">
      Sort by:
      <button onClick={() => replaceTasks(list, sortByName(list))}>Name</button>
      <button onClick={() => replaceTasks(list, sortByPrice(list))}>
        Price
      </button>
    </section>
  );
}
