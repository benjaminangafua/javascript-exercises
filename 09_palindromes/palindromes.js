const palindromes = function () {
  const ALPHABET = "abcdefghijklmnopqrstuvwxyz0123456789";

  const PLAIN_TEXT = arguments[0]
    .toLowerCase()
    .split("")
    .filter((char) => ALPHABET.includes(char))
    .join("");
  const REVERSE_TEXT = PLAIN_TEXT.split("").reverse().join("");

  return PLAIN_TEXT === REVERSE_TEXT;
};

// Do not edit below this line
module.exports = palindromes;
