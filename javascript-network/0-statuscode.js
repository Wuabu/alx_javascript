const request = require('request');

// Get the URL from the command line arguments
const url = process.argv[2];

// Check if the URL is provided
if (!url) {
  console.error('Usage: node getStatus.js <URL>');
  process.exit(1);
}

// Making a GET request to the specified URL
request.get(url, (error, response) => {
  if (error) {
    console.error('Error:', error.message);
  } else {
    // Display the status code
    console.log(`code: ${response.statusCode}`);
  }
});
