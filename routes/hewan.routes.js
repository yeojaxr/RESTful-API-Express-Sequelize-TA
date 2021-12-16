const { route } = require("express/lib/router");

module.exports = app => {
    const hewan = require("../controllers/hewan.controller.js")
    var router = require("express").Router();
    router.get('/', hewan.findAll)
    router.get ('/:id', hewan.findById)
    router.post('/', hewan.create)
    router.put('/', hewan.update)
    app.use('/hewan', router);

}

