import { useState } from "react";
import { openPack } from "../services/api";
import PokemonCard from "../components/PokemonCard";
import PackAnimation from "../components/PackAnimation";
import Card3D from "../components/Card3D";

export default function PackOpening() {
  const [cards, setCards] = useState([]);

  async function handleOpen() {
    const data = await openPack("USER_ID");

    setCards(data.cards);
  }

  return (
    <div>
      <h1>Pokemon Pack Opening</h1>

      {cards.length === 0 && <PackAnimation onOpen={handleOpen} />}

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {cards.map((card, i) => (
          <Card3D key={i} card={card} />
        ))}
      </div>
      <div className="cards">
        {cards.map((card, i) => (
          <PokemonCard key={i} card={card} />
        ))}
      </div>
    </div>
  );
}
