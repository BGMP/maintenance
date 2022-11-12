const Maintenance = require('../models/maintenance')

function createMaintenance(req, res) {
    const {target, type, description, start_date, end_date, registry} = req.body
    const newMaintenance = new Maintenance({
        target,
        type,
        description,
        start_date,
        end_date,
        registry
    })

    newMaintenance.save((error, company) => {
        if (error) {
            return res.status(400).send({message: 'Error creating maintenance.'})
        }

        return res.status(200).send(company)
    })
}

function getMaintenances(req, res) {
    Maintenance.find({}, (error, maintenances) => {
        if (error) {
            return res.status(400).send({message: 'Could not find maintenance.'})
        }

        return res.status(200).send(maintenances)
    })
}

module.exports = {
    createMaintenance,
    getMaintenances
}
