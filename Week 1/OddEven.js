// Function to check whether a number is Odd or Even

function isOddOrEven(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// Declare and initialize the variable
let number = 1;

// Call the function and print the result
console.log("Number:", number);
console.log("Result:", isOddOrEven(number));