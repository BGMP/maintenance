import axios from 'axios';

const getMaintenances = async () => {
    return await axios.get("http://localhost:3010/api/maintenances")
}

const createMaintenance = (maintenance) => {
    const response = axios.post(`${process.env.SERVIDOR}/maintenances`, {
        company: maintenance.company,
        target: maintenance.target,
        type: maintenance.type,
        description: maintenance.description,
        start_date: maintenance.start_date,
        end_date: maintenance.end_date
    });
    return response
}

const getMaintenance = async (id) => {
    console.log(id)
    const response = await axios.get(`${process.env.SERVIDOR}/maintenance/${id}`)
    return response
}

const updateMaintenance = (id, maintenance) => {
    const response = axios.put(`${process.env.SERVIDOR}/maintenance/${id}`, maintenance)
    return response
}

module.exports = {
    getMaintenances,
    createMaintenance,
    getMaintenance,
    updateMaintenance
}
