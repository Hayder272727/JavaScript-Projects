// Project 5: Comparisons and Type Coercion
// Author: Hayder Hasan
// This script demonstrates how JavaScript handles data types, coercion, and logical comparisons.

// 1️⃣ Display the data type of a variable using typeof
var myVariable = "Hello World"; // This is a string
document.write("1️⃣ The type of myVariable is: " + typeof myVariable + "<br><br>");

// 2️⃣ Combine a string and a number (Type Coercion)
var greeting = "The number is ";
var number = 25;
document.write("2️⃣ Example of type coercion: " + greeting + number + "<br><br>");

// 3️⃣ Use comparison operators and display results
document.write("3️⃣ Comparison & Logical Operators:<br>");

// == operator: checks only value
document.write("10 == '10' → " + (10 == "10") + " (true because only values are compared)<br>");

// === operator: checks both value and type
document.write("10 === '10' → " + (10 === "10") + " (false because types differ)<br>");

// > operator: greater than
document.write("8 > 4 → " + (8 > 4) + "<br>");

// < operator: less than
document.write("3 < 7 → " + (3 < 7) + "<br>");

// && operator: AND — both conditions must be true
document.write("(5 > 2 && 10 > 5) → " + (5 > 2 && 10 > 5) + " (true because both are true)<br>");

// || operator: OR — one condition must be true
document.write("(5 > 10 || 10 > 5) → " + (5 > 10 || 10 > 5) + " (true because one is true)<br>");

// ! operator: NOT — reverses the Boolean value
document.write("!(5 > 10) → " + !(5 > 10) + " (true because NOT false = true)<br>");
