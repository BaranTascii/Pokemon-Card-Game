import { useEffect, useState } from "react";

import { getCollection } from "../services/api";

export default function Collection() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function load() {
      const result = await getCollection("USER_ID");

      setData(result);
    }

    load();
  }, []);

  if (!data) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>Pokédex</h1>

      <h2>
        {data.collected}/{data.totalPokemon}
      </h2>

      <h3>
        Completion:
        {data.completion}%
      </h3>

      <h3>
        ✨ Shiny:
        {data.shinyCount}
      </h3>
    </div>
  );
}
