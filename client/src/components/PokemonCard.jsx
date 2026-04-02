import "./PokemonCard.css";

export default function PokemonCard({ card }) {
  const hp = Math.floor(Math.random() * 100) + 50;

  return (
    <div className={`pokemon-card ${card.rarity}`}>
      {/* HEADER */}
      <div className="card-header">
        <span className="name">{card.name.toUpperCase()}</span>

        <span className="hp">HP {hp}</span>
      </div>

      {/* IMAGE */}
      <div className="card-image">
        <img src={card.image} />
      </div>

      {/* FOOTER */}
      <div className="card-footer">
        <span className="rarity">{card.rarity.toUpperCase()}</span>

        {card.shiny && <span className="shiny-badge">✨ SHINY</span>}
      </div>
    </div>
  );
}
