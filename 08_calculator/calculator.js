const add = function (addTo, addend) {
  return (addTo, addend) &&
    typeof addTo === "number" &&
    typeof addend === "number"
    ? addTo + addend
    : 0;
};

const subtract = function (subtrahend, minuend) {
  return (subtrahend, minuend) &&
    typeof subtrahend === "number" &&
    typeof minuend === "number"
    ? subtrahend - minuend
    : 0;
};

const sum = function (arrArgs) {
  if (typeof arrArgs === "object" && arrArgs.length > 0) {
    let added = 0;

    for (let i = 0; i < arrArgs.length; i++) {
      added += arrArgs[i];
    }
    return added;
  } else {
    return 0;
  }
};
const multiply = function (arrArgs) {
  if (typeof arrArgs === "object") {
    let product = arrArgs[0];

    for (let i = 1; i < arrArgs.length; i++) {
      product *= arrArgs[i];
    }
    return product;
  }
};
const power = function (base, powerOfBase) {
  return (base, powerOfBase) &&
    typeof base === "number" &&
    typeof powerOfBase === "number"
    ? base ** powerOfBase
    : 0;
};
const factorial = function () {
  if (typeof arguments[0] === "number" && arguments.length === 1) {
    let counter = arguments[0];
    let product = 1;

    if (counter > 0) {
      for (i = 1; i <= arguments[0]; i++) {
        product = i * product;
        counter--;
      }
      return product;
    } else {
      return product;
    }
  }
};
factorial(5);
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
