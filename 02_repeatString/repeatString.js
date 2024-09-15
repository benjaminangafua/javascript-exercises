const repeatString = function () {
  if (
    arguments.length === 2 &&
    Number.isInteger(arguments[1]) &&
    typeof arguments[0] === "string" &&
    arguments[1] > 0
  ) {
    let repeatedString = "";
    for (let i = 0; i < arguments[1]; i++) {
      repeatedString += arguments[0];
    }
    return repeatedString;
  } else {
    throw new Error("You didn't meet the requirements");
  }
};

// Do not edit below this line
module.exports = repeatString;
