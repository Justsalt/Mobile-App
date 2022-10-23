const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postsSChema = new Schema({
  username: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
});

const exportAllPosts = mongoose.model("userPosts", postsSChema);

module.exports = exportAllPosts;
