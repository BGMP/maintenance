import axios from 'axios';

const getAlerts = async () => {
    return await axios.get(`${process.env.API}/alerts`)
}

const createAlert = (alert) => {
    console.log(alert)

    return axios.post(`${process.env.API}/alert`, {
        title: alert.title,
        description: alert.description,
        type: alert.type
    })
}

const getAlert = async (id) => {
    return await axios.get(`${process.env.API}/alert/${id}`)
}

const updateAlert = (id, company) => {
    return axios.patch(`${process.env.API}/alert/${id}`, company)
}

module.exports = {
    getAlerts,
    createAlert,
    getAlert,
    updateAlert
}
