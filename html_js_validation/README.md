# Project Title: HTML/JavaScript Form Validation

## Resources
Read or watch:
- [Javascript Form Validation](https://www.w3schools.com/js/js_validation.asp)
- [Javascript Forms](https://www.w3schools.com/js/js_form_validation.asp)
- [How to make form validation using Javascript - video](https://www.youtube.com/watch?v=rsd4FNGTRBw)

## Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:
### General
- What client-side validation is
- How to implement basic form validation using JavaScript.
- How to handle form submissions and perform data validation using JavaScript.

## Requirements
### General
- Recommended editors: Visual Studio Code
- All your files should end with a new line.
- A `README.md` file, at the root of the folder of the project is mandatory.
- You are not allowed to install, import, or use external libraries. This website must be built with only HTML/CSS/JavaScript. No NodeJS, React, VueJS, Bootstrap, etc.
- Your code should be W3C compliant and validate with W3C-Validator.

## Tasks
1. **Form Validation - Password Strength**
    - Implement JavaScript validation to check the password strength when the form is submitted.
    - Retrieve the value entered in the password input field using JavaScript.
    - Your JavaScript should be written in a separate file and used as an external script in the HTML code.
    - Write a function called `validatePassword` to validate the password based on the provided criteria.
    - The `validatePassword` function should check the following criteria:
        - The password must be at least 8 characters long.
        - The password must contain at least one uppercase letter.
        - The password must contain at least one lowercase letter.
        - The password must contain at least one numeric digit.
        - The password must contain at least one special character (e.g., !@#$%^&*).
    - If the password meets all the criteria, allow the form submission.
    - If the password does not meet the criteria, display an appropriate error message in the `<p>` element with the id “error”.

2. **Form Validation - Email Validation**
    - Implement JavaScript validation to check the email format when the form is submitted.
    - Retrieve the value entered in the email input field using JavaScript.
    - Your JavaScript should be written in a separate file and used as an external script in the HTML code.
    - Write a function called `validateEmail` to validate the email based on the email format.
    - The `validateEmail` function should check if the email follows the standard email format, which typically includes an alphanumeric username, followed by the @ symbol, and then the domain name.
    - If the email format is correct, allow the form submission.
    - If the email format is incorrect, display the error message “Please enter a valid email address.” in the `<p>` element with the id "error".
    - Prevent the default form submission behavior using JavaScript to prevent the form from submitting if the email format is not valid.

3. **Dynamic Form Field**
    - Implement JavaScript to generate a dynamic number of text input fields based on the selected value in the dropdown menu.
    - Retrieve the selected value from the dropdown menu using JavaScript.
    - Write a function called `generateInputFields` to generate the specified number of text input fields dynamically within the “inputContainer” div.
    - The `generateInputFields` function should take the selected value from the dropdown menu as a parameter.
    - Inside the `generateInputFields` function, use a loop or other appropriate logic to create the desired number of text input fields.
    - Each text input field should have a unique name attribute, such as “field1”, “field2”, etc., to differentiate them.
    - Append the dynamically generated text input fields to the “inputContainer” div.
    - Implement JavaScript validation to ensure that all dynamically generated fields are filled before submitting the form.
    - Write a function called `validateForm` to validate the form before submission.
    - The `validateForm` function should be called when the form is submitted.
    - Inside the `validateForm` function, retrieve the values entered in the dynamically generated text input fields using JavaScript.
    - Check if any of the fields are empty. If any field is empty, prevent the form submission and display the error message “Please fill in all fields”.

4. **Form Submission Handling**
    - Implement JavaScript 
