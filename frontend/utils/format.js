
const formatDate = (date) => {
    let newDate = new Date(date)
    return newDate.toLocaleString()
}

const hr = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5
        }}
    />
);

module.exports = {
    formatDate,
    hr
}
