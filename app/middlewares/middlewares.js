let middlewares = {}

require("fs")
  .readdirSync(__dirname)
  .forEach(function(file) {
    if (file !== "middlewares.js")
      middlewares[file.replace(".js", "")] = require("./" + file)
  })

module.exports = middlewares