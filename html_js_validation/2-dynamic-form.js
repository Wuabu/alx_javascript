

document.addEventListener("DOMContentLoaded", function() {
    const dynamicForm = document.getElementById("dynamicForm");
    const inputContainer = document.getElementById("inputContainer");

   
    document.getElementById("numFields").addEventListener("change", function() {
        const selectedValue = parseInt(this.value, 10);
        generateInputFields(selectedValue);
    });

    dynamicForm.addEventListener("submit", function(event) {
        
        event.preventDefault();

        
        if (validateForm()) {
            
            alert("Form is valid. Submitting!");
            
        }
    });

    function generateInputFields(numFields) {
        
        inputContainer.innerHTML = "";

        
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
        
        errorElement.textContent = "";

        
        for (const inputField of inputFields) {
            if (inputField.value.trim() === "") {
                errorElement.textContent = "Please fill in all fields.";
                return false;
            }
        }

        
        return true;
    }
});
