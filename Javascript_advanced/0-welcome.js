function welcome(firstName, lastName) {
    // Create fullName by concatenating firstName and lastName
    const fullName = firstName + ' ' + lastName;
  
    // Define the displayFullName function
    function displayFullName() {
      // Display an alert with the welcome message
      alert('Welcome ' + fullName + '!');
    }
  
    // Call the displayFullName function
    displayFullName();
  }
  
  // Example usage
  welcome('John', 'Doe');
  