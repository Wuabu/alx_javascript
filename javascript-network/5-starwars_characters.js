const request = require('request');

// Function to get characters for a specific movie
function getCharactersForMovie(movieId) {
  const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

  // Make a GET request to the Star Wars API
  request(apiUrl, (error, response, body) => {
    if (error) {
      console.error('Error:', error);
      process.exit(1);
    }

    if (response.statusCode === 200) {
      // Parse the JSON response
      const movie = JSON.parse(body);

      // Create an array to store promises for character requests
      const characterPromises = movie.characters.map((characterUrl) => {
        // Return a promise for each character
        return new Promise((resolve, reject) => {
          // Make a GET request for each character
          request(characterUrl, (charError, charResponse, charBody) => {
            if (charError) {
              reject(charError);
            } else if (charResponse.statusCode === 200) {
              const character = JSON.parse(charBody);
              resolve(`- ${character.name}`);
            } else {
              reject(`Error: Received status code ${charResponse.statusCode} for character.`);
            }
          });
        });
      });

      // Wait for all promises to resolve
      Promise.all(characterPromises)
        .then((characterResults) => {
          // Display characters for the movie
          console.log(`Characters for ${movie.title} (Episode ${movie.episode_id}):`);
          console.log(characterResults.join('\n'));
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else {
      console.error(`Error: Received status code ${response.statusCode} from the API.`);
    }
  });
}

// Check if Movie ID is provided as a command line argument
const movieId = process.argv[2];

if (!movieId) {
  console.error('Error: Movie ID is missing. Please provide a Movie ID as a command line argument.');
  process.exit(1);
}

// Call the function to get characters for the specified movie
getCharactersForMovie(movieId);
