const express = require("express");
const cors = require("cors");

const playerRouter = require("./rotes/api/players");
const clubsRouter = require("./rotes/api/clubs");

const app = express();

app.use(cors());

app.use("/api/players", playerRouter);
app.use("/api/clubs", clubsRouter);

app.listen(3000, () => console.log("Sevrer is Running..."));