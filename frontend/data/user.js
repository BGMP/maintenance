import axios from 'axios';

const getUsers = async () => {
    const response = await axios.get("http://localhost:3010/api/Users");
    return response
}

const createUsers = (Users) => {
    const response = axios.post(`${process.env.SERVIDOR}/Users`, {
        name: Users.name,
        email: Users.email,
        type: Users.type

    });
    return response
}

const getUser = async (id) => {
    console.log(id)
    const response = await axios.get(`${process.env.SERVIDOR}/Users/${id}`)
    return response
}

const updateUsers = (id, Users) => {
    const response = axios.put(`${process.env.SERVIDOR}/Users/${id}`, Users)
    return response
}

module.exports = {
    getUsers,
    createUsers,
    getUser,
    updateUsers
}