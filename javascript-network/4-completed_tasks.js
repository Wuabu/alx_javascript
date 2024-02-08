const request = require('request');

// API URL for tasks
const apiUrl = 'https://jsonplaceholder.typicode.com/tasks';


request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    process.exit(1);
  }
  if (response.statusCode === 200) {
   
    const tasks = JSON.parse(body);

    const completedTasks = {};
   
    tasks.forEach(task => {
      if (task.completed) {
        if (completedTasks[task.userID]){
          completedTasks[task.userID]++;
        }
        else {
          completedTasks[task.userID] = 1;
        }
      }
  //     if (task.completed) {
  //       const userId = task.userId;
  //       completedTasks[userId] = (completedTasks[userId] || 0) + 1;
  //     } else {
  //   console.error(`Error: Received status code ${response.statusCode} from the API.`);
  // }
    });
    console.log(completedTasks);
  } 
});
