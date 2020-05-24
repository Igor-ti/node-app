const mongoose = require("mongoose");
const moongoosePaginate = require("mongoose-paginate");
const { v4: uuidv4 } = require("uuid");

const ActivitiesSchema = new mongoose.Schema({
  id: {
    type: String,
    default: uuidv4(),
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  deletedAt: {
    type: Date,
    default: Date.now,
  },
  completeAt: {
    type: Date,
    default: Date.now,
  },
});
ActivitiesSchema.plugin(moongoosePaginate);

mongoose.model("Activities", ActivitiesSchema);
