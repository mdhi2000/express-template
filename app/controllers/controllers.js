let controllers = {}

require("fs")
  .readdirSync(__dirname)
  .forEach(function(file) {
    if(file !== "controllers.js")controllers[file.replace(".js","")] = require("./"+file)
  })

module.exports = controllers