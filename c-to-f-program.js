var tempConversion = require('./tempconversionmodule');

var tempCelsius = process.argv[2];

tempConversion(tempCelsius, function(err, data) {
  if (err) {
    console.log(err.stack);
    return;
  } else {
      console.log('Temperature in Fahrenheit: ' + data);
  }

});
