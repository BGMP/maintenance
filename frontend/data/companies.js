import axios from 'axios';

const getCompanies = async () => {
    return await axios.get(`${process.env.API}/companies`)
}

const createCompany = (company) => {
    console.log(company)

    return axios.post(`${process.env.API}/company`, {
        name: company.name,
        email: company.email,
        rut: company.rut,
        area: company.area,
        phone: company.phone,
        address: company.address,
        contact: company.contact
    })
}

const getCompany = async (id) => {
    return await axios.get(`${process.env.API}/company/${id}`)
}

const updateCompany = (id, company) => {
    return axios.patch(`${process.env.API}/company/${id}`, company)
}

module.exports = {
    getCompanies,
    createCompany,
    getCompany,
    updateCompany
}
