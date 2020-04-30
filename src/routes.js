const express = require("express");

const routes = express.Router();
const ActivitiesController = require("./controllers/ActivitiesController");

routes.get("/activities", ActivitiesController.index);
routes.get("/activities/:id", ActivitiesController.details);
routes.post("/activities", ActivitiesController.store);
routes.put("/activities/:id", ActivitiesController.update);
routes.delete("/activities/:id", ActivitiesController.destroy);
module.exports = routes;
