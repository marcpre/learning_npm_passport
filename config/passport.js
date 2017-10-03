const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const service = require("../service/user")

module.exports = () => {

    // Sign in with Email and Password
    passport.use('local', new LocalStrategy({
        usernameField: 'email'
    }, async(email, password, done) => {
        const user = await service.signin(email, password)
        done(null, user)
    }))

    passport.serializeUser((user, done) => {
        done(null, user.id)
    })

    passport.deserializeUser(async(id, done) => {
        const user = await service.findById(id)
        done(null, user)
    })

}