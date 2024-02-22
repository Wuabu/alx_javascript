

document.addEventListener("DOMContentLoaded", function() {
    const emailForm = document.getElementById("emailForm");

    emailForm.addEventListener("submit", function(event) {
        
        event.preventDefault();

        
        const emailInput = document.getElementById("email");
        const emailValue = emailInput.value;

        
        if (validateEmail(emailValue)) {
            
            alert("Email is valid. Form submitted!");
            
        }
    });

    function validateEmail(email) {
        const errorElement = document.getElementById("error");
        errorElement.textContent = "";

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            errorElement.textContent = "Please enter a valid email address.";
            return false;
        }

        return true;
    }
});
