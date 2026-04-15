const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const connectDB = require("./config/db");
const packRoutes = require("./routes/pack");
const { getTopPlayers } = require("./services/leaderboardService");

// 🔥 DB bağlantısı
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// 🔥 Routes
app.use("/pack", packRoutes);

// 🔥 HTTP + Socket server
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

// 🔥 socket'i route içinde kullanmak için
app.set("io", io);

// 🔥 SOCKET EVENTS
io.on("connection", async (socket) => {
  console.log("🔌 User connected:", socket.id);

  try {
    // İlk bağlantıda leaderboard gönder
    const topPlayers = await getTopPlayers();
    socket.emit("leaderboard", topPlayers);
  } catch (err) {
    console.error("Leaderboard fetch error:", err);
  }

  socket.on("disconnect", () => {
    console.log("❌ User disconnected:", socket.id);
  });
});

// 🔥 Server başlat
const PORT = 5000;

server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
