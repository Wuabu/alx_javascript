// dynamic-form.js

document.addEventListener("DOMContentLoaded", function() {
    const dynamicForm = document.getElementById("dynamicForm");
    const inputContainer = document.getElementById("inputContainer");

    // Add an event listener to detect changes in the dropdown menu selection
    document.getElementById("numFields").addEventListener("change", function() {
        const selectedValue = parseInt(this.value, 10);
        generateInputFields(selectedValue);
    });

    dynamicForm.addEventListener("submit", function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Call the validateForm function
        if (validateForm()) {
            // Allow form submission if all fields are filled
            alert("Form is valid. Submitting!");
            // You can uncomment the line below to submit the form programmatically
            // dynamicForm.submit();
        }
    });

    function generateInputFields(numFields) {
        // Clear existing content in the inputContainer
        inputContainer.innerHTML = "";

        // Generate the specified number of text input fields dynamically
        for (let i = 1; i <= numFields; i++) {
            const inputField = document.createElement("input");
            inputField.type = "text";
            inputField.name = "field" + i;
            inputField.placeholder = "Field " + i;
            inputContainer.appendChild(inputField);
        }
    }

    function validateForm() {
        const inputFields = inputContainer.querySelectorAll("input");
        const errorElement = document.getElementById("error");
        // Reset the error message
        errorElement.textContent = "";

        // Check if any of the dynamically generated fields are empty
        for (const inputField of inputFields) {
            if (inputField.value.trim() === "") {
                errorElement.textContent = "Please fill in all fields.";
                return false;
            }
        }

        // If all fields are filled, return true
        return true;
    }
});
