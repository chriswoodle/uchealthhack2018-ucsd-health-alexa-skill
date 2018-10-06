const request = require('request');
var formData = {
    "appointment[hospital_id]": "2499",
    "appointment[provider_id]": "6666",
    "appointment[is_urgentcare]": "true",
    "appointment[is_urgentcare]": "true",

    "appointment[apt_time]": "2018-10-06T19:00:00.000-07:00",
    "appointment[first_name]": "This is a test",
    "appointment[last_name]": "This is a test",
    "appointment[phone_number]": "7274590222",
    "appointment[can_send_sms_survey]": "false",
    "appointment[tos]": "0",
};


// https://www.clockwisemd.com/hospitals/2499/appointments/52468874/cancellation?reservation_code=1538877600
// Cancel link GET

request.post({ url: 'https://www.clockwisemd.com/hospitals/2499/appointments/create_online', formData: formData }, function optionalCallback(err, httpResponse, body) {
    if (err) {
        return console.error('upload failed:', err);
    }
    console.log('Upload successful!  Server responded with:', body);
});