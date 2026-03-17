export default function Card({ card }) {
  return (
    <div className={`card ${card.rarity}`}>
      {card.shiny && <div className="shiny">✨ Shiny</div>}
      <img src={card.image} width="120" />
      <h3>{card.name}</h3>
      <p>{card.rarity}</p>
    </div>
  );
}
