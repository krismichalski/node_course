var printTemperature = (temperature, apparentTemperature, celsius) => {
  var scale = '°F';
  if (celsius) {
    temperature = convertToCelsius(temperature);
    apparentTemperature = convertToCelsius(apparentTemperature);
    scale = '°C';
  }
  console.log(`It's currently ${temperature.toFixed(2)} ${scale}. It feels like ${apparentTemperature.toFixed(2)} ${scale}.`);
};

var convertToCelsius = (temperature) => {
  return (temperature - 32) * (5/9);
};

module.exports.printTemperature = printTemperature;
