import axios from "axios";

export async function openPack() {
  const res = await axios.get("http://localhost:5000/pack/open");

  return res.data;
}
