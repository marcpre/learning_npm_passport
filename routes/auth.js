const express = require('express')
const router = express.Router()
const passport = require('passport')
const services = require('../service/auth')

router.get("/login", (req, res) => {
    res.render('login')
})

router.get('/logout', (req, res) => {

})

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user) => {
        if (err) return next(err)
        if (!user) return res.status(401).json({ error: 'Username or password is incorrect.' })
    
        return res.json({ token: utils.createToken(user.id, user.username) })
    })(req, res, next)
})

module.exports = router