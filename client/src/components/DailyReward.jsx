import { claimDaily } from "../services/api";

export default function DailyReward() {
  async function handleClaim() {
    try {
      const data = await claimDaily("USER_ID");

      alert(`+${data.reward} coins`);
    } catch (err) {
      alert(err.response.data.error);
    }
  }

  return <button onClick={handleClaim}>🎁 Daily Reward</button>;
}
