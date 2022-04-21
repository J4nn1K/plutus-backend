module.exports = app => {
  const keys = require("../controllers/key.controller.js");
  var router = require("express").Router();
  
  router.post("/", keys.create);
  router.get("/", keys.findAll);
  router.put("/:id", keys.update);
  router.delete("/:id", keys.delete);
 
  app.use('/api/keys', router);
};