const convertToCelsius = function () {
  if (typeof arguments[0] === "number" && arguments.length === 1) {
    const FAHRENHEIT = arguments[0];

    // FORMULA C = 5/9 *(F - 32)
    const RESULT = +((5 / 9) * (FAHRENHEIT - 32)).toFixed(1);

    return RESULT;
  }
};
convertToCelsius(-100);
const convertToFahrenheit = function () {
  if (typeof arguments[0] === "number" && arguments.length === 1) {
    const CELSIUS = arguments[0];

    //FORMULA F = 9/5(C) + 32
    const RESULT = +((9 / 5) * CELSIUS + 32).toFixed(1);

    return RESULT;
  }
};
convertToFahrenheit(-10);
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
