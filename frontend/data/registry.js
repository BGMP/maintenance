import axios from 'axios';

const getRegistries = async () => {
    const response = await axios.get("http://localhost:3010/api/Registries");
    return response
}

const createRegistry = (Registry) => {
    const response = axios.post(`${process.env.SERVIDOR}/Registries`, {
        maintenance: Registry.maintenance,
        comment: Registry.comment,
        files: Registry.files
    });
    return response
}

const getRegistry = async (id) => {
    console.log(id)
    const response = await axios.get(`${process.env.SERVIDOR}/Registry/${id}`)
    return response
}

const updateRegistry = (id, Registry) => {
    const response = axios.put(`${process.env.SERVIDOR}/Registry/${id}`, Registry)
    return response
}

module.exports = {
    getRegistries,
    createRegistry,
    getRegistry,
    updateRegistry
}

