const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=wyzwolenia%2018%20szczecin',
  json: true
}, (error, response, body) => {
  console.log(body);
});
