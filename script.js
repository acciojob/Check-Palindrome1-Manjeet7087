// complete the given function
function isPalindrome(s) {
  // Remove non-alphanumeric characters and convert to lowercase
  s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Compare the string with its reverse
  return s === s.split("").reverse().join("");
}

// Example usage
const input = "race a car";
const isInputPalindrome = isPalindrome(input);
console.log(isInputPalindrome); // Output: false

function palindrome(str){

}
module.exports = palindrome
