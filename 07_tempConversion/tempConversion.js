const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * (5/9);
  if(Number.isInteger(celsius)) return celsius;
  return Number(celsius.toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = (celsius * (9/5)) + 32;
  if(Number.isInteger(fahrenheit)) return fahrenheit;
  return Number(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
