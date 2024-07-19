const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RetrospectiveItemSchema = new Schema({
  type: {
    type: String,
    enum: ["went_well", "not_went_well", "action_item"],
    required: true,
  },
  description: { type: String, required: true },
  sprint: { type: Schema.Types.ObjectId, ref: "Sprint", required: true },
});

module.exports = mongoose.model("RetrospectiveItem", RetrospectiveItemSchema);
