const router = require("express").Router();
const Joke = require("../models/joke");

router.get("/", (request, response, err) => {
  Joke.find({})
    .then((jokes) => {
      response.json(jokes);
    })
    .catch((err) => next(err));
});

router.get("/:id", (request, response, err) => {
  Joke.findById(request.params.id)
    .then((joke) => {
      response.json(joke);
    })
    .catch((err) => next(err));
});

router.post("/", (request, response, err) => {
  const { question, answer, category } = request.body;

  if (!question || !answer || !category) {
    return response.status(400).json({
      error: "Missing question, answer or category",
    });
  }

  if (question.length < 3 || answer.length < 3 || category.length < 3) {
    return response.status(400).json({
      error: "Question, answer or category too short",
    });
  }
  const joke = new Joke({
    question,
    answer,
    category,
  });

  joke
    .save()
    .then((savedJoke) => {
      response.json(savedJoke);
    })
    .catch((err) => next(err));
});

module.exports = router;
