module.exports = app => {
    const assets = require("../controllers/asset.controller.js");
    var router = require("express").Router();
    
    // Create a new Asset
    router.post("/", assets.create);
    
    // Retrieve all Assets
    router.get("/", assets.findAll);
    
    // Update a Asset with id
    router.put("/:id", assets.update);
    
    // Delete a Asset with id
    router.delete("/:id", assets.delete);
   
    app.use('/api/assets', router);
};