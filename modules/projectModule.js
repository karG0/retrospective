const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  name: { type: String, required: true, unique: true },
  PI: { type: String, required: true },
  team: { type: Schema.Types.ObjectId, ref: "Team", required: true },
});

module.exports = mongoose.model("Project", ProjectSchema);
