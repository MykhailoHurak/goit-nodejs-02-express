const express = require("express");

const clubs = require("../../data/clubs");

const router = express.Router();

router.get("/", (req, res) => {
    res.json(clubs);
});

module.exports = router;