// -------------------------------
// Project 10 - Loops and Arrays
// Author: Hayder Hasan
// -------------------------------

// Function 1: WHILE LOOP
function while_Loop() {
    let text = "";
    let i = 1; // بداية العداد
    while (i <= 5) { // طالما i أقل أو يساوي 5
        text += "Count: " + i + "<br>";
        i++; // زيادة العداد كل مرة
    }
    document.getElementById("While_Loop").innerHTML = text;
}

// Function 2: FOR LOOP
function for_Loop() {
    let text = "";
    for (let i = 0; i < 5; i++) { // حلقة for تتكرر 5 مرات
        text += "This is iteration number: " + (i + 1) + "<br>";
    }
    document.getElementById("For_Loop").innerHTML = text;
}

// Function 3: ARRAY
function display_Array() {
    let animals = ["Dog", "Cat", "Elephant", "Rabbit"]; // تعريف مصفوفة
    let text = "Animals in the array:<br>";
    
    // نستخدم حلقة لعرض كل عنصر
    for (let i = 0; i < animals.length; i++) {
        text += animals[i] + "<br>";
    }

    document.getElementById("Array_Display").innerHTML = text;
}

// Function 4: OBJECT (using let keyword)
function display_Object() {
    // إنشاء كائن باستخدام let
    let car = {
        brand: "Toyota",
        model: "Corolla",
        color: "Blue",
        year: 2023,
        // Method داخل الكائن
        description: function() {
            return "Car Info: " + this.brand + " " + this.model + 
                   " (" + this.color + ", " + this.year + ")";
        }
    };

    document.getElementById("Object_Display").innerHTML = car.description();
}
