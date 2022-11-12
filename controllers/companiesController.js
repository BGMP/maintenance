const Company = require('../models/company')

function createCompany(req, res) {
    const {name, email, rut, area, phone, address, contact} = req.body
    const newCompany = new Company({
        name,
        email,
        rut,
        area,
        phone,
        address,
        contact
    })

    newCompany.save((error, company) => {
        if (error) {
            return res.status(400).send({message: 'Error creating company.'})
        }

        return res.status(200).send(company)
    })
}

function getCompanies(req, res) {
    Company.find({}, (error, companies) => {
        if (error) {
            return res.status(400).send({message: 'Could not find company.'})
        }

        return res.status(200).send(companies)
    })
}

module.exports = {
    createCompany,
    getCompanies
}
