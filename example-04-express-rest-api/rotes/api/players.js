const express = require("express");

const players = require("../../data/players");

const router = express.Router();

// отримати всі
router.get("/", (req, res) => {
    res.json(players);
});

// отримати один по id
router.get("/:id", (req, res) => {
    res.json(players);
});

// додати новий
router.post("/", (req, res) => {
    res.json(players);
});

// оновити по id
router.put("/:id", (req, res) => {
    res.json(players);
});

// видалити по id
router.delete("/:id", (req, res) => {
    res.json(players);
});

module.exports = router;