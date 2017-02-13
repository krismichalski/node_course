// const yargs = require('yargs');
//
// const geocode = require('./geocode/geocode.js');
//
// const argv = yargs
//   .options({
//     address: {
//       describe: 'Address to fetch weather for',
//       demand: true,
//       alias: 'a',
//       string: true
//     }
//   })
//   .help()
//   .alias('help', 'h')
//   .argv;
//
// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if (errorMessage) {
//     console.log(errorMessage);
//   } else {
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });

var apiKey = '4fe5b68d1ee045ef5bff7fef478c2911';

const request = require('request');

request({
  url: `https://api.darksky.net/forecast/${apiKey}/53.4285438,14.5528116`,
  json: true
}, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    console.log(`Current temperature: ${body.currently.temperature}`);
  } else {
    console.log('Unable to fetch weather.');
  }
});
