const express = require("express")
const path = require("path")
const config = require("./config/config")
require("dotenv").config()
const app = express()

app.set("view engine", config.view.engine)
app.set("views", config.view.viewsPath)
app.use(config.session)

app.use("/static", express.static(path.join(__dirname, "public")))
app.use("/", require("./routes/web"))
app.use("/api", require("./routes/api"))

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log("Server started on port", port)
})
