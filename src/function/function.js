const serverRunning = (port) => {
    console.log(`Server running on ${port}.`)
};

const databaseRunning = () => {
    console.log('Connected To Database.')
}

exports.serverRunning = serverRunning;
exports.databaseRunning = databaseRunning;