//check for logged-in users
const sessionChecker = (req, res, next) => {
    if (req.isAuthenticated()) {
        next()
    } else {
        res.redirect("login")
    }
}

module.exports = {
    sessionChecker,
}
