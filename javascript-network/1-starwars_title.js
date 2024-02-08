// const request = require ('request');

// const url = movieId.argv[2];

// if (!movieId) {
//     console.error ('Please provide a movie ID as a command line argument')
//     process.exit(1);
// }

// const apiURL = 'https://swapi-api.alx-tools.com/api/films/${movieId}';

const request = require('request');

// Get movie ID from command line argument
const movieId = process.argv[2];

// Check if movie ID is provided
if (!movieId) {
  console.error('Please provide a movie ID as a command line argument.');
  process.exit(1);
}

// Construct the API endpoint URL with the provided movie ID
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Make a GET request to the Star Wars API
request(apiUrl, (error, response, body) => {
  // Check for errors
  if (error) {
    console.error('Error:', error);
    process.exit(1);
  }

  // Check if the response status code is 200 (OK)
  if (response.statusCode === 200) {
    // Parse the JSON response body
    const movieData = JSON.parse(body);

    // Check if the movie data is valid
    if (movieData.title) {
      console.log(`Title of Star Wars Episode ${movieId}: ${movieData.title}`);
    } else {
      console.error('Invalid movie data received from the API.');
    }
  } else {
    console.error(`Error: Received status code ${response.statusCode} from the API.`);
  }
});
