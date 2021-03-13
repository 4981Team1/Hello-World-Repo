const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const voteSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  vote: {
    type: String,
    required: false
  }
});

const Vote = mongoose.model("Vote", voteSchema);
module.exports = Vote;