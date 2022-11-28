function authGetAlert(allowedRoles) {
    return function (req, res, next) {
        const userRole = req.body.user.role
        if (!allowedRoles.includes(userRole)) {
            return res.status(401).json("No estás autorizado!")
        }

        next()
    }
}

module.exports = {
    authGetAlert
}
