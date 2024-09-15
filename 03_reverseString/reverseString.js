const reverseString = function () {
  let reversedString = "";
  for (let i = arguments[0].length - 1; i >= 0; i--) {
    reversedString += arguments[0][i];
  }
  return reversedString;
};
// Do not edit below this line
module.exports = reverseString;
