// password-validation.js

document.addEventListener("DOMContentLoaded", function() {
    const passwordForm = document.getElementById("passwordForm");

    passwordForm.addEventListener("submit", function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Retrieve the value entered in the password input field
        const passwordInput = document.getElementById("password");
        const passwordValue = passwordInput.value;

        // Call the validatePassword function
        if (validatePassword(passwordValue)) {
            // Allow form submission if the password meets the criteria
            alert("Password is valid. Form submitted!");
            // You can uncomment the line below to submit the form programmatically
            // passwordForm.submit();
        }
    });

    function validatePassword(password) {
        const errorElement = document.getElementById("error");
        // Reset the error message
        errorElement.textContent = "";

        // Check if the password meets all the criteria
        if (password.length < 8) {
            errorElement.textContent = "Password must be at least 8 characters long.";
            return false;
        }

        if (!/[A-Z]/.test(password)) {
            errorElement.textContent = "Password must contain at least one uppercase letter.";
            return false;
        }

        if (!/[a-z]/.test(password)) {
            errorElement.textContent = "Password must contain at least one lowercase letter.";
            return false;
        }

        if (!/\d/.test(password)) {
            errorElement.textContent = "Password must contain at least one numeric digit.";
            return false;
        }

        if (!/[!@#$%^&*]/.test(password)) {
            errorElement.textContent = "Password must contain at least one special character (e.g., !@#$%^&*).";
            return false;
        }

        // If all criteria are met, return true
        return true;
    }
});
