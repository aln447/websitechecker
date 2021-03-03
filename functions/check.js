const axios = require('axios');

exports.handler = function(event, context, callback) {
    const { url } = JSON.parse(event.body);
}