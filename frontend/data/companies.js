import axios from 'axios';

const getCompanies = async () => {
    return await axios.get(`${process.env.API}/companies`)
}

const createCompany = (Company) => {
    return axios.post(`${process.env.API}/companies`, {
        name: Company.name,
        email: Company.email,
        rut: Company.rut,
        area: Company.area,
        phone: Company.phone,
        address: Company.address,
        contact: Company.contact
    })
}

const getCompany = async (id) => {
    return await axios.get(`${process.env.API}/companies/${id}`)
}

const updateCompany = (id, company) => {
    return axios.put(`${process.env.API}/companies/${id}`, company)
}

module.exports = {
    getCompanies,
    createCompany,
    getCompany,
    updateCompany
}
