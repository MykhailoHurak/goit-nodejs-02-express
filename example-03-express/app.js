const express = require("express");
const fs = require("fs/promises");
const moment = require("moment");
const cors = require("cors");

const players = require("./players");

const app = express();

// const corsMiddleware = cors(); // дозволяє крос-домені запити
// app.use(corsMiddleware);
app.use(cors()); // дозволяє крос-домені запити

// app.use((req, res, next) => {
//     console.log("First Middleware...");
//     next();
// });

// app.use((req, res, next) => {
//     console.log("Second Middleware...");
//     next();
// })

// middleware для запису методу, посилання запиту та дати в файл public/server.log
app.use(async (req, res, next) => {
    const { method, url } = req;
    const date = moment().format("YYYY-MM-DD_hh:mm:ss");
    await fs.appendFile("./public/server.log", `\n${method} ${url} ${date}`);
    next();
});

app.get("/", async (req, res) => {
    res.send("<h2>Home Page<h2>");
});

app.get("/products", async (req, res) => {
    res.json([]);
});

app.get("/players", async (req, res) => {
    res.json(players);
});

app.use(async (req, res, next) => {
    res.status(404).json({
        message: "Not Found"
    })
});

app.listen(3000, () => console.log("Server is running!!!"));