const axios = require('axios');

exports.handler = function(event, context, callback) {
    const { url } = JSON.parse(event.body);

    const send = (message) => {
        callback(null, {
            statusCode: 200,
            body: JSON.stringify({message}),
        })
    }
}