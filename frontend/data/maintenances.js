import axios from 'axios';

const getMaintenances = async () => {
    return await axios.get(`${process.env.API}/maintenances`)
}

const getMaintenance = async (id) => {
    return await axios.get(`${process.env.API}/maintenance/${id}`)
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
