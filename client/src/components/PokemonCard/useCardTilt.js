import { useState } from "react";

export function useCardTilt() {
  const [style, setStyle] = useState({});

  const handleMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 30;
    const rotateX = -((y / rect.height) - 0.5) * 30;

    setStyle({
      "--rotateX": `${rotateX}deg`,
      "--rotateY": `${rotateY}deg`,
      "--pointerX": `${(x / rect.width) * 100}%`,
      "--pointerY": `${(y / rect.height) * 100}%`,
    });
  };

  return {
    style,
    handleMove
  };
}