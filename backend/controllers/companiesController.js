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
            return res.status(400).send({message: 'Error creating company.', error})
        }

        return res.status(200).send(company)
    })
}

function getCompany(req, res) {
    Company.findById(req.params.id, function (err, company) {
        if (!company) {
            res.status(404).send("No result found");
        } else {
            res.json(company);
        }
    });
}

function deleteCompany(req, res) {
    Company.findByIdAndRemove(req.params.id)
        .then(function () {
            res.status(200).json("Company deleted");
        })
        .catch(function (err) {
            res.status(400).send("Company delete failed.");
        });
}

function updateCompany(req, res) {
    Company.findByIdAndUpdate(req.params.id, req.body)
        .then(function () {
            res.json("Company updated");
        })
        .catch(function (err) {
            res.status(422).send("Company update failed.");
        });
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
    getCompany,
    deleteCompany,
    updateCompany,
    getCompanies
}
