const mongoose = require("mongoose");

const twitSchema = mongoose.Schema({
  name: String,
  text: String,
  comment: String,
  like: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      reg: "User",
    },
  ],
});


const Twit = mongoose.model("Twit", twitSchema);

module.exports = Twit;
