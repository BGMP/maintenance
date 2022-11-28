const Alert3 = require('../models/alert3')

function createAlert3(req, res) {
    const {title, description} = req.body
    const newAlert3 = new Alert3({
        title,
        description
    })

    newAlert3.save((error, alert3) => {
        if (error) {
            return res.status(400).send({message: 'Error creating alert.', error})
        }

        return res.status(200).send(alert3)
    })
}

function getAlert3(req, res) {
    Alert3.findById(req.params.id, function (err, alert3) {
        if (!alert3) {
            res.status(404).send("No result found");
        } else {
            res.json(alert3);
        }
    });
}

function updateAlert3(req, res) {
    Alert3.findByIdAndUpdate(req.params.id, req.body)
        .then(function () {
            res.json("Alert3 updated");
        })
        .catch(function (err) {
            res.status(422).send("Alert3 update failed.");
        });
}

function deleteAlert3(req, res) {
    Alert3.findById(req.params.id, function (err, alert3) {
        if (!alert3){
            res.status(404).send("Alert not found");
        } else {
            Alert3.findByIdAndRemove(req.params.id)
                .then(function () {
                    res.status(200).json("Alert deleted");
                })
                .catch(function (err) {
                    res.status(400).send("Alert delete failed.");
                });
        }
    });
}

function getAlerts3(req, res) {
    Alert3.find({}, (error, alerts3) => {
        if (error) {
            return res.status(400).send({message: 'Could not find user.'})
        }

        return res.status(200).send(alerts3)
    })
}

module.exports = {
    createAlert3,
    getAlert3,
    updateAlert3,
    deleteAlert3,
    getAlerts3
}
