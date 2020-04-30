const mongoose = require("mongoose");

const Activities = mongoose.model("Activities");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const activities = await Activities.paginate({}, { page, limit: 10 });
    return res.json(activities);
  },
  async details(req, res) {
    const activities = await Activities.findById(req.params.id);
    return res.json(activities);
  },
  async store(req, res) {
    const activities = await Activities.create(req.body);
    return res.json(activities);
  },
  async update(req, res) {
    const activities = await Activities.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    return res.json(activities);
  },
  async destroy(req, res) {
    await Activities.findByIdAndDelete(req.params.id); // replaced for delete by depreciation of syntax old
    return res.send();
  },
};
