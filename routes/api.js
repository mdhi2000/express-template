const api = require("express").Router()
const controllers = require("../app/controllers/controllers")
const middlewares = require("../app/middlewares/middlewares")

api.get("/", controllers.HomeController.index)

api.get("/test", (req, res) => {
  res.send({data:req.session.test})
})

module.exports = api