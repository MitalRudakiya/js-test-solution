export function isPalindrome(inputString) {
  inputString = inputString.toLowerCase();
  var reveseString = inputString.split("").reverse().join("")
  return reveseString == inputString;
}
