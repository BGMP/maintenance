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

module.exports = {
    createUser,
    getUsers
}
