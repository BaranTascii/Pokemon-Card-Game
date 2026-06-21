import axios from "axios";

export async function openPack(userId, packType) {
  const res = await axios.post("http://localhost:5000/pack/open", {
    userId,
    packType,
  });

  return res.data;
}

export async function claimDaily(userId) {
  const res = await axios.post("http://localhost:5000/daily/claim", { userId });

  return res.data;
}

export async function register(data) {
  const res = await axios.post("http://localhost:5000/auth/register", data);

  return res.data;
}

export async function login(data) {
  const res = await axios.post("http://localhost:5000/auth/login", data);

  return res.data;
}

export async function getCollection(userId) {
  const res = await axios.get(`http://localhost:5000/collection/${userId}`);

  return res.data;
}

export async function getAchievements(userId) {
  const res = await axios.get(`http://localhost:5000/achievement/${userId}`);

  return res.data;
}

