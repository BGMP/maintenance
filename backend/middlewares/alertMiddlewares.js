function authPostAlert(allowedRoles) {
    return function (req, res, next) {
        const userRole = req.body.user.role
        if (!allowedRoles.includes(userRole)) {
            return res.status(401).json("No estás autorizado!")
        }

        next()
    }
}
function authGetAlert(allowedRoles) {
    return function (req, res, next) {
        const userRole = req.body.user.role
        if (!allowedRoles.includes(userRole)) {
            return res.status(401).json("No estás autorizado!")
        }

        next()
    }
}
function authPatchAlert(allowedRoles) {
    return function (req, res, next) {
        const userRole = req.body.user.role
        if (!allowedRoles.includes(userRole)) {
            return res.status(401).json("No estás autorizado!")
        }

        next()
    }
}
function authDeleteAlert(allowedRoles) {
    return function (req, res, next) {
        const userRole = req.body.user.role
        if (!allowedRoles.includes(userRole)) {
            return res.status(401).json("No estás autorizado!")
        }

        next()
    }
}
function authGetAlerts(allowedRoles) {
    return function (req, res, next) {
        const userRole = req.body.user.role
        if (!allowedRoles.includes(userRole)) {
            return res.status(401).json("No estás autorizado!")
        }

        next()
    }
}

module.exports = {
    authPostAlert,
    authGetAlert,
    authPatchAlert,
    authDeleteAlert,
    authGetAlerts
}
