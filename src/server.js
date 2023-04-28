const {app} = require('./app');
const {PORT} = require('./env')
const {serverRunning} = require('./function/function')
const {connect} = require('./database/database');
connect();
app.listen(() => {
    serverRunning(PORT)
});