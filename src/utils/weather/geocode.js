const request = require('postman-request');

// Request to mapbox to convert location name to langitude and longitude
const geocode = location => {
    const accessKey = process.env.GEOCODE_ACCESS_KEY
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(location)}.json?access_token=${accessKey}&limit=1`;

    return new Promise((resolve, reject) => {
        try {
            request({ url, json: true }, (error, { body }) => {
                if (error) {     
                    reject('Unable to connect to mapbox service');
                } else if (body.features.length === 0) {
                    reject('Unable to find location. Try another location');
                } else {
                    const { center, place_name } = body.features[0];
                    resolve(
                        { latitude: center[1], longitude: center[0], placeName: place_name, location}
                    )  
                }
            });
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = geocode