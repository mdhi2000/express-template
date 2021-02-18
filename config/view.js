const { patch } = require("../routes/web");
const path = require('path');

module.exports = {
  engine:"ejs",
  viewsPath:path.join(__dirname,"..","resources","views")
}