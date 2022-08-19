const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    Description: {
      type: String,
      required: true,
    },
    documentURL: {
      type: String,
    },
    videoURL: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("article", ArticleSchema);
