const mongoose = require('mongoose');

function ConnectDatabase(url) {
    return mongoose.connect(url);
}

module.exports = ConnectDatabase;
