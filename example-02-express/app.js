const express = require("express");

const players = require("./players");

const app = express();

app.get("/", (req, res) => {
    res.send("<h2>Home Page!!!!!!!!!!!!!!!!!!!</h2>")
});

app.get("/players", (req, res) => {
    res.json(players); // може відправляти null та робити відступи app.set("json spaces", 8)
    // res.send(players);
    // res.send("<h2>Players Page</h2>")
})

app.listen(3000, () => console.log("Server is running!!!"));
