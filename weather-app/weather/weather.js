const request = require('request');

var getWeather = (lat, lng, callback) => {
  var apiKey = '4fe5b68d1ee045ef5bff7fef478c2911';

  request({
    url: `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        template: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch weather.');
    }
  });
};

module.exports.getWeather = getWeather;
