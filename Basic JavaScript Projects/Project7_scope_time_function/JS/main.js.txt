// ======================================================
// Project 7: Scope, Time, and Debugging
// Author: Hayder Hasan
// ======================================================

// 1️⃣ GLOBAL AND LOCAL VARIABLES

// Global variable — can be accessed from any function
var globalVar = "I'm a global variable!";

function globalExample() {
    console.log(globalVar); // ✅ Works fine because it's global
}

function localExample() {
    var localVar = "I'm a local variable!";
    console.log(localVar); // ✅ Works fine inside the function
}

globalExample();
localExample();

// ❌ Intentional error: trying to access a local variable outside its scope
function showError() {
    try {
        console.log(localVar); // This will cause an error
    } catch (error) {
        console.log("⚠️ Error found and handled: " + error.message);
    }
}

// Debugging message
console.log("Attempting to run function with intentional error...");
showError(); // Run it to see the error caught in console

// ======================================================
// 2️⃣ IF STATEMENT FUNCTION (Age check example)

function checkAge() {
    var age = document.getElementById("Age").value; // Get user input
    var message; // Placeholder for result

    if (age >= 18) {
        message = "✅ You are eligible to vote!";
    } else {
        message = "❌ You must be at least 18 years old to vote.";
    }

    // Display result in the paragraph
    document.getElementById("Result").innerHTML = message;
}

// ======================================================
// 3️⃣ TIME FUNCTION USING Date().getHours()

function Time_function() {
    var time = new Date().getHours(); // Get the current hour (0–23)
    var reply; // Placeholder message

    if (time < 12) {
        reply = "Good morning! ☀️";
    } 
    else if (time < 18) {
        reply = "Good afternoon! 🌞";
    } 
    else {
        reply = "Good evening! 🌙";
    }

    document.getElementById("Time").innerHTML = reply;
}

// ======================================================
// Each function is commented to explain its purpose and logic
// Use F12 → Console to view debug logs and scope behavior
