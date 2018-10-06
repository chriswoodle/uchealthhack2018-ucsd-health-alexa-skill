const googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyBBeJ6lG8kFlqIEPi4BMH4uqF1Tr4HdV1o'
});

const location = { lat: 32.87533, lng: -117.23502 };

function getClinics() {
    return new Promise((resolve, reject) =>{
        const query = {
            query: 'UC San Diego Health urgent care clinic',
            location: location,
            radius: 1000,
        };
        googleMapsClient.places(query, (err, response) => {
            if (!err) {
                // Handle response.
                const clinics = response.json.results;
                console.log(clinics);
                console.log(clinics.map(clinic => clinic.name));
                return resolve(clinics);
            } else if (err === 'timeout') {
                // Handle timeout.
                return reject(new Error(err));
            } else if (err.json) {
                // Inspect err.status for more info.
                return reject(new Error(err.json));
            } else {
                // Handle network error.
                return reject(new Error(err));
            }
        });
    });
}

module.exports = {
    getClinics
}
