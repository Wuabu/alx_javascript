Project Tasks README
This repository contains a series of tasks that involve working with web storage (cookies, local storage, and session storage) and building a basic shopping cart system. The tasks are designed to demonstrate proficiency in using vanilla JavaScript to manipulate web storage and create interactive web pages.

Task 0: Create Basic Cookie
Instructions
Install webpack-dev-server by running npm install webpack-dev-server --save-dev. If you encounter missing dependencies, install them with npm i -D webpack and npm i -D webpack-cli.
Create an empty file src/index.js.
Run your server with node_modules/.bin/webpack-dev-server.
In a file 0-index.html, create a basic HTML template with two text inputs, buttons for logging in and showing cookies.
Implement the setCookies and showCookies functions:
setCookies: Set cookies for firstname and email using the values from the respective inputs.
showCookies: Create a DOM element (paragraph) displaying the cookies and append it to the bottom of the page.
Requirements
Access the code with http://localhost:8080/0-index.html
Use vanilla JavaScript to complete the task
Task 1: Create Cookie with Expiration Date and Specific Path
Instructions
Reuse the code from the previous task.
Modify the way you set cookies to expire in 10 days.
Requirements
Access the code with http://localhost:8080/1-index.html
Use vanilla JavaScript to complete the task
Task 2: Read Cookie
Instructions
Reuse the code from the previous task.
Create a getCookie function that accepts a name as an argument and returns the value of the cookie. If the cookie does not exist, return an empty string.
Modify the showCookies function to display the paragraph with the format: Email: EMAIL - Firstname: FIRSTNAME
Requirements
Access the code with http://localhost:8080/2-index.html
Use vanilla JavaScript to complete the task
Task 3: Delete Cookie and Mini Application
Instructions
Reuse the code from the previous task.
Add a div in HTML that will contain the login form with an h2, two text inputs, and a button.
Implement the following functions:
showForm: Remove the Welcome message if it exists and show the form.
hideForm: Hide the form.
deleteCookiesAndShowForm: Remove the two cookies and show the form by calling showForm.
showWelcomeMessageOrForm: If the user is not logged in, call showForm. If the user is logged in, replace the body with a welcome message.
Requirements
Access the code with http://localhost:8080/3-index.html
Use vanilla JavaScript to complete the task
Build the Welcome message with JavaScript without using HTML
Task 4: Use js-cookie
Instructions
Reuse the code from the previous task.
Add js-cookie to your HTML page using the jsdelivr CDN.
Delete the getCookie function and use js-cookie get function instead.
Use js-cookie remove function within deleteCookiesAndShowForm function.
Use js-cookie set function within setCookiesAndShowWelcomeMessage function (new function that sets cookies and calls showWelcomeMessageOrForm).
Requirements
Access the code with http://localhost:8080/4-index.html
Build the Welcome message with JavaScript without using HTML
Use js-cookie for every cookie manipulation
Task 5: Local Storage
Instructions
Create a basic shopping cart:
Create an array availableItems with items: Shampoo, Soap, Sponge, and Water.
Display an alert if local storage is not enabled.
Call the functions createStore and displayCart if local storage is available.
Implement the addItemToCart function:
Accept an item (string) as an argument.
Add a key to the local storage with the name of the item and set the value to true.
Implement the createStore function:
Create a <ul> and append it to the DOM.
Loop through the array of items, creating a list item for each. On click, call addItemToCart.
Implement the displayCart function:
Display a message in a <p> element indicating the number of items in the cart.
Tips
You should see the list of available items.
Clicking on items and refreshing the browser should update the cart message.
Opening a new tab should also show the cart message.
Requirements
Build the DOM using JavaScript only.
Use local



