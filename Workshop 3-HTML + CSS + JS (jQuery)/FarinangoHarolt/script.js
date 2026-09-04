$(document).ready(function() {
    // 1. Toggle Effect: Change background color randomly in hero section
    $("#changeColorBtn").click(function() {
        // Generate random hex color
        var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        $("#hero").css("background-color", randomColor);
    });

    // 2. Image Gallery: Clicking an image enlarges it in a popup modal
    $(".gallery-img").click(function() {
        var imgSrc = $(this).attr("src");
        $("#modalImg").attr("src", imgSrc);
        // Set display flex to center properly, then fade in
        $("#imageModal").css("display", "flex").hide().fadeIn();
    });

    // Close modal when clicking X or outside the image
    $(".close-modal, #imageModal").click(function(e) {
        if(e.target !== $("#modalImg")[0]) {
            $("#imageModal").fadeOut();
        }
    });

    // 3. Form Validation
    $("#contactForm").submit(function(e) {
        e.preventDefault(); // Prevent actual form submission

        var name = $("#name").val().trim();
        var email = $("#email").val().trim();
        var message = $("#message").val().trim();

        // Basic validation
        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Email validation regex
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // If valid
        alert("Form submitted successfully!");
        
        // Optional: clear form
        $("#contactForm")[0].reset();
    });
});

