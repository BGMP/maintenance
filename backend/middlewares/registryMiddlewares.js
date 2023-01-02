function authGetRegistry(allowedRoles) {
    return function (req, res, next) {
        //const userRole = req.body.user.role
        //if (!allowedRoles.includes(userRole)) {
        //    return res.status(401).json("No estás autorizado!")
        //}

        next()
    }
}
function authPostRegistry(allowedRoles) {
    return function (req, res, next) {
        //const userRole = req.body.user.role
        //if (!allowedRoles.includes(userRole)) {
        //   return res.status(401).json("No estás autorizado!")
        //}

        next()
    }
}
function authPatchRegistry(allowedRoles) {
    return function (req, res, next) {
        //const userRole = req.body.user.role
        //if (!allowedRoles.includes(userRole)) {
        //    return res.status(401).json("No estás autorizado!")
        //}

        next()
    }
}
function authDeleteRegistry(allowedRoles) {
    return function (req, res, next) {
        //const userRole = req.body.user.role
        //if (!allowedRoles.includes(userRole)) {
        //    return res.status(401).json("No estás autorizado!")
        //}

        next()
    }
}
function authGetRegistries(allowedRoles) {
    return function (req, res, next) {
        //const userRole = req.body.user.role
        //if (!allowedRoles.includes(userRole)) {
        //    return res.status(401).json("No estás autorizado!")
        //}

        next()
    }
}
module.exports = {
    authGetRegistry,
    authPostRegistry,
    authPatchRegistry,
    authDeleteRegistry,
    authGetRegistries
}
