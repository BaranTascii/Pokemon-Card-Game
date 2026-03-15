const express = require("express");
const cors = require("cors");

const packRoutes = require("./routes/pack");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.json());

app.use("/pack", packRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
