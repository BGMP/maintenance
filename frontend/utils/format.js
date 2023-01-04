
const formatDate = (date) => {
    let newDate = new Date(date)
    return newDate.toLocaleString()
}

module.exports = {
    formatDate
}
