import { useEffect, useState } from "react";

import { getAchievements } from "../services/api";

import { useAuth } from "../context/AuthContext";

export default function Achievements() {
  const { user } = useAuth();

  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await getAchievements(user._id);

      setAchievements(data);
    }

    if (user) load();
  }, [user]);

  return (
    <div>
      <h1>Achievements</h1>

      {achievements.map((achievement) => (
        <div key={achievement}>🏆 {achievement}</div>
      ))}
    </div>
  );
}
