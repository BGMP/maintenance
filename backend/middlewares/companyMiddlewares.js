function authGetCompanies(allowedRoles) {
    return function (req, res, next) {
        //const userRole = req.body.user.role
        //if (!allowedRoles.includes(userRole)) {
            //return res.status(401).json("No estás autorizado!")
            //}

        next()
    }
}

function authPostCompanies(allowedRoles) {
    return function (req, res, next) {
        //const userRole = req.body.user.role
        //if (!allowedRoles.includes(userRole)) {
            //return res.status(401).json("No estás autorizado!")
            //}

        next()
    }
}

function authDeleteCompanies(allowedRoles) {
    return function (req, res, next) {
        //const userRole = req.body.user.role
        //if (!allowedRoles.includes(userRole)) {
            //return res.status(401).json("No estás autorizado!")
            //}

        next()
    }
}

function authUpdateCompanies(allowedRoles) {
    return function (req, res, next) {
        //const userRole = req.body.user.role
        //if (!allowedRoles.includes(userRole)) {
            //return res.status(401).json("No estás autorizado!")
            //}

        next()
    }
}

function authGetsCompanies(allowedRoles) {
    return function (req, res, next) {
        //const userRole = req.body.user.role
        //if (!allowedRoles.includes(userRole)) {
        //    return res.status(401).json("No estás autorizado!")
        //}

        next()
    }
}

module.exports = {
    authGetCompanies,
    authPostCompanies,
    authDeleteCompanies,
    authUpdateCompanies,
    authGetsCompanies
}
