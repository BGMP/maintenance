function authGetCompanies(allowedRoles) {
    return function (req, res, next) {
        const userRole = req.body.user.role
        if (!allowedRoles.includes(userRole)) {
            return res.status(401).json("No estás autorizado!")
        }

        next()
    }
}

function authPostCompanies(allowedRoles) {
    return function (req, res, next) {
        const userRole = req.body.user.role
        if (!allowedRoles.includes(userRole)) {
            return res.status(401).json("No estás autorizado!")
        }

        next()
    }
}

function authDeletCompanies(allowedRoles) {
    return function (req, res, next) {
        const userRole = req.body.user.role
        if (!allowedRoles.includes(userRole)) {
            return res.status(401).json("No estás autorizado!")
        }

        next()
    }
}

function authUpdateCompanies(allowedRoles) {
    return function (req, res, next) {
        const userRole = req.body.user.role
        if (!allowedRoles.includes(userRole)) {
            return res.status(401).json("No estás autorizado!")
        }

        next()
    }
}

function authGetsCompanies(allowedRoles) {
    return function (req, res, next) {
        const userRole = req.body.user.role
        if (!allowedRoles.includes(userRole)) {
            return res.status(401).json("No estás autorizado!")
        }

        next()
    }
}

module.exports = {
    authGetCompanies,
    authPostCompanies,
    authDeletCompanies,
    authUpdateCompanies,
    authGetsCompanies
}
