// complete the given function
const alphanumeric = s.replace(/[^A-Za-z0-9]/g, '');

  // Step 2: Convert to lowercase
  const lowercase = alphanumeric.toLowerCase();

  // Step 3: Check if reversed string is equal to original string
  const reversed = lowercase.split('').reverse().join('');
  return lowercase === reversed;
}
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
