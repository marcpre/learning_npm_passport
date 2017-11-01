const express = require('express')
const router = express.Router()
const passport = require('passport')
const services = require('../service/auth')
const utils = require('../util/utils')

router.get("/", utils.isLogged(), (req, res) => {
    res.render('dashboard')
})

module.exports = router
