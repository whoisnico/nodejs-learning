
var url = 'https://mylogger.io/log'; //message service logger example

function log(message) {
    // Send an HTTP request
    console.log(message)
}

module.exports.log = log;
module.exports.endPoint = url;