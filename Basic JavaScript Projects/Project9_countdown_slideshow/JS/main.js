// ======================================================
// Project 9: Countdown & Slideshow
// Author: Hayder Hasan
// ======================================================

// -------------------- COUNTDOWN FUNCTION --------------------
function countdown() {
    var seconds = document.getElementById("seconds").value; // Get user input
    function tick() {
        seconds = seconds - 1; // Decrease seconds
        document.getElementById("timer").innerHTML = seconds; // Display current time

        // Wait 1 second before calling tick() again
        var time = setTimeout(tick, 1000);

        // Stop when countdown ends
        if (seconds == -1) {
            alert("Time’s up! ⏰");
            clearTimeout(time);
            document.getElementById("timer").innerHTML = "0";
        }
    }
    tick(); // Start the countdown
}

// -------------------- SLIDESHOW FUNCTIONALITY --------------------
let slideIndex = 1;
showSlides(slideIndex);

// Function to move forward/backward
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to jump directly to a slide
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Main slideshow function
function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // Wrap-around logic
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove active class from dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show the current slide and activate corresponding dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Auto slideshow (every 3 seconds)
setInterval(() => {
    plusSlides(1);
}, 3000);
