const session = require("express-session")
require("dotenv").config()

module.exports = session({
  secret: process.env.SESSION_SECRET || "session secret",
  resave: true,
  rolling: true,
  saveUninitialized: true,
  cookie: {
    maxAge:20 * 60 * 1000
   },
})