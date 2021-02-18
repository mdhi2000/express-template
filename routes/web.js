const web = require("express").Router()
const controllers = require("../app/controllers/controllers")
const middlewares = require("../app/middlewares/middlewares")

web.get("/", controllers.HomeController.index)

module.exports = web