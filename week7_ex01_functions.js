function multiply(num1, num2, num3) {
    return num1 * num2 * num3;
}
console.log("---multiply(2, 3, 4)---");
console.log(multiply(2, 3, 4)); // Output: 24

const convertToSeconds = function(minutes) {
    return minutes * 60;
};
console.log("---convertToSeconds(5)---");
console.log(convertToSeconds(5)); // Output: 300

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
console.log("---fahrenheitToCelsius(100)---");
console.log(fahrenheitToCelsius(100)); // Output: 37.77777777777778

function reverseString(str) {
    // split('') turns the string into an array of characters
    // reverse() flips the array order
    // join('') glues the characters back into a single string
    return str.split('').reverse().join('');
}
console.log("---reverseString('hello')---");
console.log(reverseString('hello')); // Output: 'olleh'

function countVowels(sentence) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    
    for (let i = 0; i < sentence.length; i++) {
        if (vowels.includes(sentence[i])) {
            count++;
        }
    }
    return count;
}
console.log("---countVowels('Hello, my dog is cute')---");
console.log(countVowels('Hello, my dog is cute')); // Output: 8

function isPrime(num) {
    if (num <= 1) return false; // 1 and below are not prime
    
    // Check if num is divisible by any number up to its square root
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // Found a factor, so it's not prime
        }
    }
    return true; // No factors found, it's prime
}
console.log("---isPrime(2)---");
console.log(isPrime(2)); // Output: true
console.log("---isPrime(4)---");
console.log(isPrime(4)); // Output: false
console.log("---isPrime(17)---");
console.log(isPrime(17)); // Output: true
console.log("---isPrime(21)---");
console.log(isPrime(21)); // Output: false
