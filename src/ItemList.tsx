import { type Item } from "./data";
// Simple component, assumes keys will be handled correctly in App.js map
function ItemList({ items }: { items: Item[] }) {
  if (!items || items.length === 0) {
    return <p>No items match the filter.</p>;
  }
  return (
    <ul>
      {items.map((item) => (
        // We'll add the key here now as it's not the bug focus
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

export default ItemList;
