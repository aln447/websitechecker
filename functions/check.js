const axios = require('axios');

exports.handler = function(event, context, callback) {
    const { url } = JSON.parse(event.body);

    const send = (message) => {
        callback(null, {
            statusCode: 200,
            body: JSON.stringify({message}),
        })
    }

    const sendMessage = (isFound) => {
        send(isFound ? 'EXISTS' : 'DOESN\'T EXIST');
    }

    const checkAnUrl = (url) => {
        axios.get(url)
            .then(() => sendMessage(true))
            .catch(() => sendMessage(false));
    }

    if(event.httpMethod === 'GET') {
        checkAnUrl(url);
    } else {
        send('BAD METHOD, PAL');
    }
}