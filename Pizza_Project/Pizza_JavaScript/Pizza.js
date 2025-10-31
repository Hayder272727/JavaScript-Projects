// This function calculates the total price and displays the order summary
function getReceipt() {
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");

    // Loop to determine which size was selected
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        }
    }

    // Assign price based on pizza size
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }

    runningTotal = sizeTotal;

    // Get toppings
    var toppingsTotal = 0;
    var selectedTopping = [];
    var toppingsArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingsArray.length; j++) {
        if (toppingsArray[j].checked) {
            selectedTopping.push(toppingsArray[j].value);
        }
    }

    var toppingCount = selectedTopping.length;
    // First topping is free, additional toppings cost $1 each
    if (toppingCount > 1) {
        toppingsTotal = toppingCount - 1;
    } else {
        toppingsTotal = 0;
    }

    runningTotal += toppingsTotal;

    // Display order details
    for (var k = 0; k < selectedTopping.length; k++) {
        text1 = text1 + selectedTopping[k] + "<br>";
    }

    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML =
        "<h3>Total: $" + runningTotal + ".00</h3>";
}
