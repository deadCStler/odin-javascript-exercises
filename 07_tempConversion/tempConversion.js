const convertToCelsius = function(temp) {
  //C = (F - 32) * (5/9)
  let result = (temp - 32) * (5/9);
  result=Math.round(result * 10) / 10;
  return result;
};

const convertToFahrenheit = function(temp) {
  //F = (C * (9/5)) + 32
  let result = (temp * (9/5)) + 32;
  result=Math.round(result * 10) / 10;
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
