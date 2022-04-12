module.exports = app => {
    const quotes = require("../controllers/quote.controller.js");
    var router = require("express").Router();
    
    router.get("/:identification", quotes.get);
   
    app.use('/api/quotes', router);
};