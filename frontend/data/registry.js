import axios from 'axios';

const getRegistries = async () => {
    return await axios.get(`${process.env.API}/registries`)
}

const createRegistry = (registry) => {
    return axios.post(`${process.env.API}/registry`, {
        maintenance: registry.maintenance,
        comment: registry.comment,
        files: registry.files
    })
}

const getRegistry = async (id) => {
    return await axios.get(`${process.env.API}/registry/${id}`)
}

const updateRegistry = (id, registry) => {
    return axios.put(`${process.env.API}/registry/${id}`, registry)
}

module.exports = {
    getRegistries,
    createRegistry,
    getRegistry,
    updateRegistry
}

