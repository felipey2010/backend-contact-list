const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {
  res.send("Hello World!");
});

const ContactController = require("./controllers/ContactController");
routes.get("/contacts", ContactController.index);
routes.get("/contacts/:id", ContactController.show);
routes.post("/contacts", ContactController.store);
routes.put("/contacts/:id", ContactController.update);
routes.delete("/contacts/:id", ContactController.destroy);

module.exports = routes;
