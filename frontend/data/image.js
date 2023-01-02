import axios from 'axios';

const getImages = async () => {
    const response = await axios.get("http://localhost:3010/api/Images");
    return response
}

const createImage = (Image) => {
    const response = axios.post(`${process.env.SERVIDOR}/Images`, {
        url: Image.url,
        name: Image.name,
        mimeType: Image.mimeType
    });
    return response
}

const getImage = async (id) => {
    console.log(id)
    const response = await axios.get(`${process.env.SERVIDOR}/Image/${id}`)
    return response
}

const updateImage = (id, Image) => {
    const response = axios.put(`${process.env.SERVIDOR}/Image/${id}`, Image)
    return response
}

module.exports = {
    getImages,
    createImage,
    getImage,
    updateImage
}
