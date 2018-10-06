const accountSid = 'x';
const authToken = 'x';
const client = require('twilio')(accountSid, authToken);

function sendMessage(message) {
    return client.messages
        .create({
            body: message,
            from: '+x',
            to: '+x'
        })
        .then(message => console.log(message.sid))
        .done();
}

module.exports = {
    sendMessage
}