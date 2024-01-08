const router = require("express").Router();
const Score = require("../models/score");
const Joke = require("../models/joke");
const mongoose = require("mongoose");

router.get("/", (request, response, err) => {
  Score.find({})
    .then((scores) => {
      response.json(scores);
    })
    .catch((err) => next(err));
});

router.post("/", async (request, response, err) => {
  const { username, score, joke } = request.body;

  if (!username || !score || !joke) {
    return response.status(400).json({
      error: "Missing username, score or joke",
    });
  }

  if (username.length < 3) {
    return response.status(400).json({
      error: "Username too short",
    });
  }

  const jokeFound = await Joke.findById(new mongoose.Types.ObjectId(joke));
  if (jokeFound === null) {
    return response.status(400).json({
      error: "Joke not found",
    });
  }

  const scoreExistForThisJokeAndUser = await Score.findOne({
    username,
    joke: new mongoose.Types.ObjectId(joke),
  });
  if (scoreExistForThisJokeAndUser !== null) {
    return response.status(400).json({
      error: "Score already exists for this joke and user",
    });
  }

  const newScore = new Score({
    username,
    date: new Date().toDateString(),
    score,
    joke,
  });

  newScore
    .save()
    .then((savedScore) => {
      response.json(savedScore);
    })
    .catch((err) => next(err));
});

module.exports = router;
