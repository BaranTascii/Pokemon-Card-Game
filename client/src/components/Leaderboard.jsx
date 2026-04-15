import { useEffect, useState } from "react";
import { socket } from "../utils/socket";

export default function Leaderboard() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    socket.on("leaderboard", (data) => {
      setPlayers(data);
    });

    return () => socket.off("leaderboard");
  }, []);

  return (
    <div className="leaderboard">
      <h2>🏆 Leaderboard</h2>

      {players.map((p, i) => (
        <div key={i}>
          #{i + 1} {p.username} — {p.score}
        </div>
      ))}
    </div>
  );
}
