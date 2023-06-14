function isPalindrome(s) {
  // Step 1: Remove non-alphanumeric characters
  const alphanumeric = s.replace(/[^A-Za-z0-9]/g, '');

  // Step 2: Convert to lowercase
  const lowercase = alphanumeric.toLowerCase();

  // Step 3: Check if reversed string is equal to original string
  const reversed = lowercase.split('').reverse().join('');
  return lowercase === reversed;
}

// Test cases
console.log(isPalindrome("race a car"));  // Output: false
console.log(isPalindrome("racecar"));    // Output: true
console.log(isPalindrome("RaceCar"));    // Output: true
console.log(isPalindrome("raceCAR"));    // Output: true

