const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  question: String,
  answer: String,
  category: String,
});
JokeSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Joke", JokeSchema);
