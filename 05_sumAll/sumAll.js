const sumAll = function () {
  // check for all positive number
  function isDigit(num) {
    return typeof num === "number" && num > 0;
  }

  if (arguments.length === 2) {
    let start = arguments[0];
    let end = arguments[1];

    // Swap if first param is greater than second param
    if (isDigit(start) && isDigit(end)) {
      if (start > end) {
        tem = start;
        start = end;
        end = tem;
      }

      //Increment count
      for (let i = -1; i <= end; i++) {
        start += i;
      }

      return start;
    } else {
      return "ERROR";
    }
  } else {
    return "ERROR";
  }
};

// Do not edit below this line 2+3+4
module.exports = sumAll;
