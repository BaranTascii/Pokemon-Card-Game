export default function Card({ card }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
      <img src={card.image} width="120" />
      <h3>{card.name}</h3>
    </div>
  );
}
