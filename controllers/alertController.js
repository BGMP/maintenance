const Alert = require('../models/alert')

function createAlert(req, res) {
    const {title, description, type} = req.body
    const newAlert = new Alert({
        title,
        description,
        type
    })

    newAlert.save((error, alert) => {
        if (error) {
            return res.status(400).send({message: 'Error creating alert.', error})
        }

        return res.status(200).send(alert)
    })
}

function getAlert(req, res) {
    Alert.findById(req.params.id, function (err, alert) {
        if (!alert) {
            res.status(404).send("No result found");
        } else {
            res.json(alert);
        }
    });
}

function updateAlert(req, res) {
    Alert.findByIdAndUpdate(req.params.id, req.body)
        .then(function () {
            res.json("alert updated");
        })
        .catch(function (err) {
            res.status(422).send("alert update failed.");
        });
}

function deleteAlert(req, res) {
    Alert.findById(req.params.id, function (err, alert) {
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
    Alert.find({}, (error, alerts) => {
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
