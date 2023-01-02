import axios from 'axios';

const getCompanies = async () => {
    const response = await axios.get("http://localhost:3010/api/Companies");
    return response
}

const createCompany = (Company) => {
    const response = axios.post(`${process.env.SERVIDOR}/Companies`, {
        name: Company.name,
        email: Company.email,
        rut: Company.rut,
        area: Company.area,
        phone: Company.phone,
        address: Company.address,
        contact: Company.contact
    });
    return response
}

const getCompany = async (id) => {
    console.log(id)
    const response = await axios.get(`${process.env.SERVIDOR}/Company/${id}`)
    return response
}

const updateCompany = (id, Company) => {
    const response = axios.put(`${process.env.SERVIDOR}/Company/${id}`, Company)
    return response
}

module.exports = {
    getCompanies,
    createCompany,
    getCompany,
    updateCompany
}