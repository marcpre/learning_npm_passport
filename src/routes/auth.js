const express = require('express')
const router = express.Router()
const passport = require('passport')
const services = require('../service/auth')

router.get("/login", (req, res) => {
    res.render('login')
})

router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('login')
})

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user) => {
        if (err) return next(err)
        if (!user) return res.status(401).json({ error: 'Email or password is incorrect.' })
    
        return res.render('dashboard')
    })(req, res, next)
})

module.exports = router
