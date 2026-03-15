import { useState } from "react";
import { openPack } from "../services/api.js";
import Card from "../components/Card.jsx";

export default function PackOpening() {
  const [cards, setCards] = useState([]);

  async function handleOpen() {
    const pack = await openPack();

    setCards(pack);
  }

  return (
    <div>
      <h1>Pokemon Pack Opening</h1>
      <button onClick={handleOpen}>Open Pack</button>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5,1fr)",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {cards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </div>
  );
}
