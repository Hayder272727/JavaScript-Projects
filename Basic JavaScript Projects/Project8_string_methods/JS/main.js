// ========================================================
// Project 8: String and Number Methods
// Author: Hayder Hasan
// ========================================================

// 1️⃣ concat() METHOD
// Combines multiple strings into one
function concatMethod() {
    var part1 = "JavaScript ";
    var part2 = "string ";
    var part3 = "methods are ";
    var part4 = "very useful!";
    // Join all strings using concat()
    var sentence = part1.concat(part2, part3, part4);
    document.getElementById("Concatenate").innerHTML = sentence;
}

// 2️⃣ slice() METHOD
// Extracts a section of a string and returns it as a new string
function sliceMethod() {
    var sentence = "Learning JavaScript is fun and powerful!";
    // slice(startIndex, endIndex) → extracts characters from index 9 to 19
    var section = sentence.slice(9, 19);
    document.getElementById("Slice").innerHTML = section;
}

// 3️⃣ toString() METHOD
// Converts a number into a string
function toStringMethod() {
    var number = 2025; // numeric value
    var stringVersion = number.toString(); // convert number → string
    document.getElementById("ToString").innerHTML =
        "Original number: " + number + "<br>" +
        "After toString(): " + stringVersion;
}

// 4️⃣ toPrecision() METHOD
// Formats a number to a specified number of significant digits
function precisionMethod() {
    var num = 12345.6789;
    var preciseNum = num.toPrecision(6); // keep 6 significant digits
    document.getElementById("Precision").innerHTML =
        "Original number: " + num + "<br>" +
        "After toPrecision(6): " + preciseNum;
}

// ========================================================
// Call all functions automatically when the page loads
concatMethod();
sliceMethod();
toStringMethod();
precisionMethod();
