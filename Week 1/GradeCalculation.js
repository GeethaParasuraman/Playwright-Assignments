// Function to calculate student's grade
function getGrade(score) {

    switch (true) {

        case score >= 90:
            return "A";

        case score >= 80:
            return "B";

        case score >= 70:
            return "C";

        case score >= 60:
            return "D";

        default:
            return "F";
    }
}

// Declare and initialize the variable
let score = 45;

// Call the function and print the result
console.log("Score:", score);
console.log("Grade:", getGrade(score));