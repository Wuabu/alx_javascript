
document.addEventListener("DOMContentLoaded", function() {
    const passwordForm = document.getElementById("passwordForm");

    passwordForm.addEventListener("submit", function(event) {
        event.preventDefault();

       
        const passwordInput = document.getElementById("password");
        const passwordValue = passwordInput.value;

        
        if (validatePassword(passwordValue)) {
            
            alert("Password is valid. Form submitted!");
            
        }
    });

    function validatePassword(password) {
        const errorElement = document.getElementById("error");
        
        errorElement.textContent = "";

        
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

        
        return true;
    }
});
