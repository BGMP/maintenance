const Maintainance = require('../models/maintainance')

function createMaintainance(req, res) {
    const {target, type, descriptions, start_date, end_date} = req.body
    const newMaintainance = new Maintainance({
        target,
        type,
        descriptions,
        start_date,
        end_date
    })

    newMaintainance.save((error, maintaninance) => {
        if (error) {
            return res.status(400).send({message: 'Error creating maintainance.'})
        }

        return res.status(200).send(maintaninance)
    })
}

function getMaintainances(req, res) {
    Maintainance.find({}, (error, maintainances) => {
        if (error) {
            return res.status(400).send({message: 'Could not find maintainance.'})
        }

        return res.status(200).send(maintainances)
    })
}

module.exports = {
    createMaintainance,
    getMaintainances
}
