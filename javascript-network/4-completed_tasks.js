const request = require('request');

// API URL for tasks
const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    process.exit(1);
  }

  if (response.statusCode === 200) {
    // Parse the JSON response
    const tasks = JSON.parse(body);

    // Create an object to store the count of each number from 1 to 10
    const numberCount = {};

    // Iterate through tasks and count occurrences of each number from 1 to 10
    for (let i = 1; i <= 10; i++) {
      numberCount[i] = 0;
    }

    tasks.forEach((task) => {
      const userId = task.userId;

      // Increment the count for the user ID
      numberCount[userId]++;
    });

    console.log(numberCount);
  } else {
    console.error(`Error: Received status code ${response.statusCode} from the API.`);
  }
});
