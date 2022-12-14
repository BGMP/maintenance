const Registry = require('../models/registry')

function createRegistry(req, res) {
    const {maintenance, comment, files} = req.body

    const newRegistry = new Registry({
        maintenance,
        comment,
        files
    })

    newRegistry.save((error, registry) => {
        if (error) {
            return res.status(400).send({message: 'Error creating Registry.', error})
        }

        return res.status(200).send(registry)
    })
}

function getRegistry(req, res) {
    Registry.findById(req.params.id).populate({path: "maintenance"}).exec((error, registries) => {
        if (error) {
            return res.status(400).send({message: 'Could not find registries.'})
        }

        return res.status(200).send(registries)
    })
}

function updateRegistry(req, res) {
    Registry.findByIdAndUpdate(req.params.id, req.body.registry)
        .then(function () {
            res.json("Registry updated");
        })
        .catch(function (err) {
            res.status(422).send("Registry update failed.");
        });
}

function deleteRegistry(req, res) {
    Registry.findById(req.params.id, function (err, registry) {
        if (!registry) {
            res.status(404).send("Registry not found");
        } else {
            Registry.findByIdAndRemove(req.params.id)
                .then(function () {
                    res.status(200).json("Registry deleted");
                })
                .catch(function (err) {
                    res.status(400).send("Registry delete failed.");
                });
        }
    });
}

function getRegistries(req, res) {
    Registry.find({}).populate({path: "maintenance"}).exec((error, registries) => {
        if (error) {
            return res.status(400).send({message: 'Could not find registry.'})
        }

        return res.status(200).send(registries)
    })
}

module.exports = {
    createRegistry,
    getRegistry,
    updateRegistry,
    deleteRegistry,
    getRegistries,

}
