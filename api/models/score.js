const mongoose = require("mongoose");

const ScoreSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  username: String,
  date: Date,
  score: Number,
  joke: mongoose.Schema.Types.ObjectId,
});

ScoreSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Score", ScoreSchema);
