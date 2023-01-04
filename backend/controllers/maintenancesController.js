const Maintenance = require('../models/maintenance')
const Company = require('../models/company')

function createMaintenance(req, res) {
    const {company, target, type, description, start_date, end_date, registry} = req.body

    const newMaintenance = new Maintenance({
        company,
        target,
        type,
        description,
        start_date,
        end_date,
        registry
    })

    newMaintenance.save((error, company) => {
        if (error) {
            return res.status(400).send({message: 'Error creating maintenance.', error})
        }

        return res.status(200).send(company)
    })
}

function getMaintenance(req, res) {
    Maintenance.findById(req.params.id, function (err, company) {
        if (!company) {
            res.status(404).send("No result found");
        } else {
            res.json(company);
        }
    });
}

function updateMaintenance(req, res) {
    Maintenance.findByIdAndUpdate(req.params.id, req.body.maintenance)
        .then(function () {
            res.json("Maintenance updated");
        })
        .catch(function (err) {
            res.status(422).send("Maintenance update failed.");
        });
}

function deleteMaintenance(req, res) {
    Maintenance.findById(req.params.id, function (err, maintenances) {
        if (!maintenances) {
            res.status(404).send("Maintenance not found");
        } else {
            Maintenance.findByIdAndRemove(req.params.id)
                .then(function () {
                    res.status(200).json("Maintenance deleted");
                })
                .catch(function (err) {
                    res.status(400).send("Maintenance delete failed.");
                });
        }
    });
}

function getMaintenances(req, res) {
    let userRole
    let companyId;
    //if (req.body.company != null) {
    //    userRole = "company"
    //    companyId = req.body.company._id
    //} else {
    //    userRole = req.body.user.role
    //}

    Maintenance.find({}).populate({path: "company"}).exec((error, maintenances) => {
        if (error) {
            return res.status(400).send({message: 'Could not find maintenance.'})
        }

        return res.status(200).send(maintenances)
    })
}

module.exports = {
    createMaintenance,
    getMaintenance,
    updateMaintenance,
    deleteMaintenance,
    getMaintenances
}
