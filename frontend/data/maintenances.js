import axios from 'axios';

const getMaintenances = async () => {
    return await axios.get(`${process.env.API}/maintenances`)
}

const getMaintenance = async (id) => {
    let r1 = await axios.get(`${process.env.API}/maintenance/${id}`)
    let r2 = await axios.get(`${process.env.API}/company/${r1.data.company}`)

    let response = [{
        company: r2.data,
        _id: r1.data._id,
        target: r1.data.target,
        type: r1.data.type,
        description: r1.data.description,
        start_date: r1.data.start_date,
        end_date: r1.data.end_date
    }]

    return response
}

const createMaintenance = (maintenance) => {
    return axios.post(`${process.env.API}/maintenance`, {
        company: maintenance.company,
        target: maintenance.target,
        type: maintenance.type,
        description: maintenance.description,
        start_date: maintenance.start_date,
        end_date: maintenance.end_date
    })
}

const updateMaintenance = (id, maintenance) => {
    return axios.patch(`${process.env.API}/maintenance/${id}`, maintenance)
}

module.exports = {
    getMaintenances,
    getMaintenance,
    updateMaintenance,
    createMaintenance,
}
