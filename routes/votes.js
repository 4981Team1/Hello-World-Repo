const express = require("express");
const router = express.Router();
const Vote = require("../models/Vote");

// Get all votes
router.get("/", async (req, res) => {
  try {
    const votes = await Vote.find();
    res.json(votes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add new vote
router.post("/", async (req, res) => {
  // const vote = new Vote({
  //   firstname: req.body.firstname,
  //   lastname: req.body.lastname,
  //   vote: req.body.vote
  // });
  const vote = new Vote({
    firstname: "John",
    lastname: "Doe",
    vote: Math.round(Math.random() * 10)
  });
  try {
    const newVote = await vote.save();
    res.status(201).json({ newVote });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


module.exports = router;