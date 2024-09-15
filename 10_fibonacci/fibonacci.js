const fibonacci = function (args) {
  const fibonacciNumber = typeof args !== "number" ? parseInt(args) : args;

  if (fibonacciNumber > 0 && fibonacciNumber <= 2) return 1;

  if (fibonacciNumber < 0) return "OOPS";

  if (fibonacciNumber === 0) return 0;

  let fib = [0, 1];
  for (let i = 2; i <= fibonacciNumber; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[fibonacciNumber];
};
console.log(fibonacci(25));
// Do not edit below this line
module.exports = fibonacci;
