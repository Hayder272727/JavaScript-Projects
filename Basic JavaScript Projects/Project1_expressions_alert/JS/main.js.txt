// This function demonstrates how to use the += operator to concatenate strings
function updateText() {
    // Get the paragraph element by its ID
    var text = document.getElementById("result");

    // Concatenate new text using the += operator
    text.innerHTML += " JavaScript functions are powerful!";
    
    // Add a console log to show that the function has run (optional for testing)
    console.log("updateText() function executed successfully.");
}
