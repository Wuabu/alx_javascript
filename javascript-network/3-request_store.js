const request = require('request');
const fs = require('fs');

// Get URL and file path from command line arguments
const url = process.argv[2];
const filePath = process.argv[3];

// Check if both URL and file path are provided
if (!url || !filePath) {
  console.error('Please provide both URL and file path as command line arguments.');
  process.exit(1);
}

// Make a GET request to the specified URL
request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    process.exit(1);
  }

  if (response.statusCode === 200) {
    // Write the response body to the specified file
    fs.writeFile(filePath, body, { encoding: 'utf-8' }, (err) => {
      if (err) {
        console.error('Error writing to file:', err);
        process.exit(1);
      }
      console.log('File contents successfully written to:', filePath);
    });
  } else {
    console.error(`Error: Received status code ${response.statusCode} from the URL.`);
  }
});
