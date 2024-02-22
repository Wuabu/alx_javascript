// email-validation.js

document.addEventListener("DOMContentLoaded", function() {
    const emailForm = document.getElementById("emailForm");

    emailForm.addEventListener("submit", function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Retrieve the value entered in the email input field
        const emailInput = document.getElementById("email");
        const emailValue = emailInput.value;

        // Call the validateEmail function
        if (validateEmail(emailValue)) {
            // Allow form submission if the email format is correct
            alert("Email is valid. Form submitted!");
            // You can uncomment the line below to submit the form programmatically
            // emailForm.submit();
        }
    });

    function validateEmail(email) {
        const errorElement = document.getElementById("error");
        // Reset the error message
        errorElement.textContent = "";

        // Check if the email follows the standard email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            errorElement.textContent = "Please enter a valid email address.";
            return false;
        }

        // If the email format is correct, return true
        return true;
    }
});
