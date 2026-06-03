import { useCardTilt } from "./useCardTilt";
import "./PokemonCard.css";

export default function PokemonCard({ card }) {

  const {
    style,
    handleMove
  } = useCardTilt();

  return (
    <div
      className="pokemon-card"
      style={style}
      onMouseMove={handleMove}
    >

      <div className="card-inner">

        <div className="foil"></div>

        <div className="glare"></div>

        <img
          src={card.image}
          alt={card.name}
        />

        <div className="name">
          {card.name}
        </div>

      </div>

    </div>
  );
}