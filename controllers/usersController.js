const User = require('../models/user')

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
            return res.status(400).send({message: 'Error creating user.', error})
        }

        return res.status(200).send(user)
    })
}

function getUser(req, res) {
    User.findById(req.params.id, function (err, user) {
        if (!user) {
            res.status(404).send("No result found");
        } else {
            res.json(user);
        }
    });
}

function updateUser(req, res) {
    User.findByIdAndUpdate(req.params.id, req.body)
        .then(function () {
            res.json("User updated");
        })
        .catch(function (err) {
            res.status(422).send("User update failed.");
        });
}

function deleteUser(req, res) {
    User.findById(req.params.id, function (err, user) {
        if (!user){
            res.status(404).send("User not found");
        } else {
            User.findByIdAndRemove(req.params.id)
                .then(function () {
                    res.status(200).json("User deleted");
                })
                .catch(function (err) {
                    res.status(400).send("User delete failed.");
                });
        }
    });
}

function getUsers(req, res) {
    User.find({}, (error, users) => {
        if (error) {
            return res.status(400).send({message: 'Could not find user.'})
        }

        return res.status(200).send(users)
    })
}

module.exports = {
    createUser,
    getUser,
    updateUser,
    deleteUser,
    getUsers
}
