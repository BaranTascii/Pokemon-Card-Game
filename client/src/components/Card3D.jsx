import { motion } from "framer-motion";
import { useState } from "react";

export default function Card3D({ card }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div style={{ perspective: "1000px" }} onClick={() => setFlipped(!flipped)}>
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{
          width: "150px",
          height: "220px",
          position: "relative",
          transformStyle: "preserve-3d",
        }}
      >
        {/* FRONT */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            background: "#333",
          }}
        />

        {/* BACK */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
            background: "white",
            textAlign: "center",
          }}
        >
          <img src={card.image} width="100" />
          <p>{card.name}</p>

          {card.shiny && <div style={{ color: "gold" }}>✨ SHINY</div>}
        </div>
      </motion.div>
    </div>
  );
}
