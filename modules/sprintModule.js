const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SprintSchema = new Schema({
  name: { type: String, required: true },
  project: { type: Schema.Types.ObjectId, ref: "Project", required: true },
});

module.exports = mongoose.model("Sprint", SprintSchema);
