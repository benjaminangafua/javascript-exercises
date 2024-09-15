const leapYears = function () {
  if (typeof arguments[0] === "number" && arguments.length === 1) {
    const ARGUMENTS = arguments[0];
    const stringifyNum = ARGUMENTS.toString();

    // console.log();
    if (
      stringifyNum.includes("00") &&
      ARGUMENTS % 4 === 0 &&
      ARGUMENTS % 400 === 0
    ) {
      return true;
    } else if (ARGUMENTS % 4 === 0 && !stringifyNum.includes("00")) {
      return true;
    } else {
      return false;
    }
  }
};
leapYears(1900);
// Do not edit below this line
module.exports = leapYears;
