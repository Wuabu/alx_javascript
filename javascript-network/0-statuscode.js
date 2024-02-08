const request = require('request');


const url = process.argv[2];


if (!url) {
  console.error('Usage: node getStatus.js <URL>');
  process.exit(1);
}


request.get(url, (error, response) => {
  if (error) {
    console.error('Error:', error.message);
  } else {
    
    console.log(`code: ${response.statusCode}`);
  }
});
