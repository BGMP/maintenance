const Alert = require('../models/alert')

function createAlert(req, res) {
    const {title, description} = req.body
    const newAlert = new Alert({
        title,
        description
    })

    newAlert.save((error, alert) => {
        if (error) {
            return res.status(400).send({message: 'Error creating alert.', error})
        }

        return res.status(200).send(alert)
    })
}

function getAlert(req, res) {
    alert.findById(req.params.id, function (err, alert) {
        if (!alert) {
            res.status(404).send("No result found");
        } else {
            res.json(alert);
        }
    });
}

function updateAlert(req, res) {
    alert.findByIdAndUpdate(req.params.id, req.body)
        .then(function () {
            res.json("alert updated");
        })
        .catch(function (err) {
            res.status(422).send("alert update failed.");
        });
}

function deleteAlert(req, res) {
    alert.findById(req.params.id, function (err, alert) {
        if (!alert){
            res.status(404).send("Alert not found");
        } else {
            alert.findByIdAndRemove(req.params.id)
                .then(function () {
                    res.status(200).json("Alert deleted");
                })
                .catch(function (err) {
                    res.status(400).send("Alert delete failed.");
                });
        }
    });
}

function getAlerts(req, res) {
    alert.find({}, (error, alerts) => {
        if (error) {
            return res.status(400).send({message: 'Could not find user.'})
        }

        return res.status(200).send(alerts)
    })
}

module.exports = {
    createAlert,
    getAlert,
    updateAlert,
    deleteAlert,
    getAlerts
}
