Lexical Scoping and Welcome Message
This repository contains a set of JavaScript files demonstrating concepts related to lexical scoping and closures. The scripts showcase the use of functions, closures, and scopes to achieve various functionalities. Below is an overview of each file:

0-welcome.js
Description: This script defines a function welcome that takes two arguments (firstName and lastName) and displays an alert with a welcome message.

How to Test:

Open your web inspector in the tab “Console.”
Copy-paste the code in the console and hit enter.
Copy and paste welcome('Holberton', 'School'); and hit enter. It should prompt an alert with the content: "Welcome Holberton School!"
Afterward, executing alert(fullName) should return a reference error fullName is not defined.
1-nested_functions.js
Description: This script demonstrates closure and scope chain by creating nested functions within an outer function. It displays a series of popups with various concatenated messages.

How to Test:

Run the script, and it should display three popups one by one with the text "Welcome," "Welcome Holberton," and "Welcome Holberton!"
2-function_me.js
Description: Defines a function welcomeMessage which returns a closure for an alert displaying "Welcome <fullName>." It then creates variables and calls the function to display alerts.

How to Test:

In the web console, execute:
javascript
Copy code
guillaume();
alex();
fred();
This should display three alerts with the names Guillaume, Alex, and Fred.
3-classrooms.js
Description: This script showcases the use of closures within a function to create a classroom and generate student seat numbers.

How to Test:

Execute the following code:
javascript
Copy code
console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[9]());
It should return seat numbers 1, 4, and 10, respectively.
4-complex_closure.js
Description: Defines functions divideBy and addBy that return closures for division and addition operations. Additionally, it creates four closures with specific numbers.

How to Test:

Execute the provided code snippets to perform operations with the created closures.
Feel free to explore and run these scripts to deepen your understanding of lexical scoping and closures in JavaScript.