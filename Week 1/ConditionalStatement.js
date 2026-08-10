// Function to launch browser
function launchBrowser(browserName) {

    if (browserName === "chrome") {
        console.log("Launching Chrome browser");
    } else {
        console.log("Launching default browser");
    }
}


// Function to run tests
function runTests(testType) {

    switch (testType) {

        case "smoke":
            console.log("Running Smoke tests");
            break;

        case "sanity":
            console.log("Running Sanity tests");
            break;

        case "regression":
            console.log("Running Regression tests");
            break;

        default:
            console.log("Running Smoke tests");
            break;
    }
}


// Declare and initialize variables
let browserName = "chrome";
let testType = "regression";

// Call the functions
launchBrowser(browserName);
runTests(testType);