const removeFromArray = function () {
  const originalArr = [...arguments[0]];
  const associateArr = [...arguments].slice(1);

  let finalArr = [];

  originalArr.filter((item) => {
    if (!associateArr.includes(item)) {
      finalArr.push(item);
    }
  });
  return finalArr;
};

// Do not edit below this line
module.exports = removeFromArray;
