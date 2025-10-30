// =======================================
// Final Project 6: Ternary Operators and Constructors
// Author: Hayder Hasan
// =======================================

// 1️⃣ TERNARY OPERATOR FUNCTION
// This function uses user input to check if the person is tall enough to ride.
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    // The ternary operator checks the condition and returns one of two strings.
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

// =======================================
// 2️⃣ CONSTRUCTOR FUNCTION USING "NEW" AND "THIS"

// Constructor for creating Vehicle objects
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

// Create new objects (instances) using the constructor
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

// Function to display one of the objects on the web page
function displayVehicle() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
        "Erik drives a " + Erik.Vehicle_Color + "-colored " +
        Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year + ".";
}

// Call the function automatically when the page loads
displayVehicle();

// =======================================
// 3️⃣ NESTED FUNCTION EXAMPLE
// Demonstrates a function inside another function.
function count_Function() {
    document.getElementById("Counting").innerHTML = Count();

    // Outer function
    function Count() {
        var Starting_point = 9;

        // Inner (nested) function that adds 1 to the value
        function Plus_one() {
            Starting_point += 1;
        }

        Plus_one(); // Call the nested function
        return Starting_point; // Return the result
    }
}
