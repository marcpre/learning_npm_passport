require("dotenv").config()
const express = require("express")
const path = require("path")
const logger = require("morgan")
const bodyParser = require("body-parser")
const cookieParser = require('cookie-parser')
const passport = require('passport')
const auth = require("./routes/auth")
const app = express()

// view engine setup
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "pug")

app.use(logger(process.env.LOG_ENV))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false, }))
app.use(express.static(path.join(__dirname, "public")))
app.use(cookieParser());
app.use(passport.initialize())

/*
* Routes
*/
app.use("/", auth)

/*
* Server
*/
//Start Server
var port = process.env.APP_PORT || 8080
var host = process.env.APP_URL || "localhost"

app.listen(port, host, function() {
    console.log("Listening on " + host + ":" + port)
})

module.exports = app