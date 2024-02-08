const request = require('request');

// API URL for todos
const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// Make a GET request to the API URL
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    process.exit(1);
  }

  if (response.statusCode === 200) {
    // Parse the JSON response
    const todos = JSON.parse(body);

    // Create an object to store completed tasks count by user id
    const completedTasksByUser = {};

    // Iterate through todos and count completed tasks for each user
    todos.forEach((todo) => {
      if (todo.completed) {
        const userId = todo.userId;

        // Increment the completed tasks count for the user
        completedTasksByUser[userId] = (completedTasksByUser[userId] || 0) + 1;
      }
    });

    // Print users with completed tasks
    Object.keys(completedTasksByUser).forEach((userId) => {
      console.log(`${userId}: ${completedTasksByUser[userId]}`);
    });
  } else {
    console.error(`Error: Received status code ${response.statusCode} from the API.`);
  }
});
