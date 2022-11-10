const Company = require('../models/company')

function createCompany(req, res) {
    const {name, area, phone, direction, contact_company, rut_company, email} = req.body
    const newCompany = new Company({
        name,
        area,
        phone,
        direction,
        contact_company,
        rut_company,
        email
    })

    newCompany.save((error, Company) => {
        if (error) {
            return res.status(400).send({message: 'Error creating company.'})
        }

        return res.status(200).send(Company)
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
