import { type Item } from "./data";

function ItemList({ items }: { items: Item[] }) {
  if (!items || items.length === 0) {
    return <p>No items match the filter.</p>;
  }
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

export default ItemList;
