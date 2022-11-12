const User = require('../models/user')
const Maintenance = require("../models/maintenance");

function createUser(req, res) {
    const {name, email, admin, company} = req.body
    const newUser = new User({
        name,
        email,
        admin,
        company
    })

    newUser.save((error, user) => {
        if (error) {
            return res.status(400).send({message: 'Error creating user.'})
        }

        return res.status(200).send(user)
    })
}

function getUsers(req, res) {
    User.find({}, (error, users) => {
        if (error) {
            return res.status(400).send({message: 'Could not find user.'})
        }

        return res.status(200).send(users)
    })
}

const userDetails = (req, res) => {
    User.findById(req.params.id, function (err, user) {
        if (!user) {
            res.status(404).send("No result found");
        } else {
            res.json(user);
        }
    });
};

const userUpdate = (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body)
        .then(function () {
            res.json("User updated");
        })
        .catch(function (err) {
            res.status(422).send("User update failed.");
        });
};

const userDelete = (req, res) => {
    User.findById(req.params.id, function (err, user) {
        if (!user){
            res.status(404).send("User not found");
        } else {
            Maintenance.findByIdAndRemove(req.params.id)
                .then(function () {
                    res.status(200).json("User deleted");
                })
                .catch(function (err) {
                    res.status(400).send("User delete failed.");
                });
        }
    });
};






module.exports = {
    createUser,
    getUsers,
    userDelete,
    userUpdate,
    userDetails
}
