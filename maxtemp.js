var async = require('async');
var getWeather = require('./get-weather-module');

var cities = [
  'Atlanta, GA',
  'Pheonix, AZ',
  'Dallas, TX',
  'Philadelphia, PA'
];

async.map(cities, getWeather, function(err, results) {
  var temperatures = results.map(function(result) {
    return result.main.temp;
  });
  var max = Math.max.apply(Math, temperatures);
  console.log('Max temperature: ' + max);
});
