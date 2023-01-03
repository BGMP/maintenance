import axios from "axios";

const getAlert = async () => {
    const response = await axios.get(`${process.env.SERVIDOR}/alert`)
    return response
}
const createAlert = async (alert) => {
    console.log(alert)
    const response = await axios.post(`${process.env.SERVIDOR}/alert`, alert)
    return response
}
module.exports = {
    getAlert,
    createAlert
}