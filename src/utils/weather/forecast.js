const request = require('postman-request');

// Request to weatherstack to fetch a forecast by langitude and longitude
const forecast = ({ latitude, longitude, placeName, location }) => {
    const accessKey = '596c94584e31d9c1c0ccefb51f75bd04';
    const url = `http://api.weatherstack.com/current?access_key=${accessKey}&query=${latitude},${longitude}`;
    
    return new Promise((resolve, reject) => {
        try {
            request({ url, json: true }, (error, { body }) => {
                if (error) {     
                    reject('Unable to get weather details');
                } else if (body.error) {
                    reject('Unable to find location');
                } else {
                    const { weather_descriptions, temperature, feelslike } = body.current;
                    resolve(
                        { weatherDescriptions: weather_descriptions, temperature, feelsLike: feelslike, placeName, submitSearchTerm: location }
                    )
                }
            });
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = forecast