function authCreateMaintenance(allowedRoles) {
    return function (req, res, next) {
        const userRole = req.body.user.role
        if (!allowedRoles.includes(userRole)) {
            return res.status(401).json("No estás autorizado para crear mantenciones!")
        }

        next()
    }
}

function authGetMaintenance(allowedRoles) {
    return function (req, res, next) {
        let userRole
        if (req.body.company != null) {
            userRole = "company"
        } else {
            userRole = req.body.user.role
        }

        if (!allowedRoles.includes(userRole)) {
            return res.status(401).json("No estás autorizado para ver esta mantención!")
        }

        next()
    }
}

function authUpdateMaintenance(allowedRoles) {
    return function (req, res, next) {
        const userRole = req.body.user.role
        if (!allowedRoles.includes(userRole)) {
            return res.status(401).json("No estás autorizado para actualizar mantenciones!")
        }

        next()
    }
}

function authDeleteMaintenance(allowedRoles) {
    return function (req, res, next) {
        const userRole = req.body.user.role
        if (!allowedRoles.includes(userRole)) {
            return res.status(401).json("No estás autorizado para eliminar mantenciones!")
        }

        next()
    }
}

function authGetMaintenances(allowedRoles) {
    return function (req, res, next) {
        let userRole
        if (req.body.company != null) {
            userRole = "company"
        } else {
            userRole = req.body.user.role
        }

        if (!allowedRoles.includes(userRole)) {
            return res.status(401).json("No estás autorizado para ver las mantenciones!")
        }

        next()
    }
}

module.exports = {
    authCreateMaintenance,
    authGetMaintenance,
    authUpdateMaintenance,
    authDeleteMaintenance,
    authGetMaintenances
}
