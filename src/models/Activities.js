const mongoose = require("mongoose");
const moongoosePaginate = require("mongoose-paginate");

const ActivitiesSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
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
