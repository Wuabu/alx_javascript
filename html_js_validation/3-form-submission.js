

document.addEventListener("DOMContentLoaded", function() {
    const submitForm = document.getElementById("submitForm");

    
    submitForm.addEventListener("submit", function(event) {
        
        event.preventDefault();

        
        handleFormSubmit();
    });

    function handleFormSubmit() {
        
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");

        const nameValue = nameInput.value.trim();
        const emailValue = emailInput.value.trim();

        
        const errorElement = document.getElementById("error");

        
        errorElement.textContent = "";

        
        if (nameValue === "" || emailValue === "") {
            errorElement.textContent = "Please fill in all required fields.";
            return;
        }

        
        alert("Form submitted successfully!");

        
    }
});
