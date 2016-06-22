function tempConversion(tempCelsius) {
  var tempFahrenheit = tempCelsius * 9/5 + 32;
  return tempFahrenheit;
}

module.exports = tempConversion;
