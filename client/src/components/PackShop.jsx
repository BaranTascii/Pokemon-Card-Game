export default function PackShop({ onSelect }) {
  return (
    <div>
      <button onClick={() => onSelect("basic")}>Basic</button>

      <button onClick={() => onSelect("premium")}>Premium</button>

      <button onClick={() => onSelect("legend")}>Legend</button>

      <button onClick={() => onSelect("shiny")}>Shiny</button>
    </div>
  );
}
