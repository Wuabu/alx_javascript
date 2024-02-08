const request = require('request');

// Function to get characters for a specific movie
async function getCharactersForMovie(movieId) {
  const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

  try {
    // Make a GET request to the Star Wars API
    const movieResponse = await promisifiedRequest(apiUrl);
    const movie = JSON.parse(movieResponse.body);

    // Create an array to store promises for character requests
    const characterPromises = movie.characters.map(async (characterUrl) => {
      // Make a GET request for each character
      const characterResponse = await promisifiedRequest(characterUrl);
      const character = JSON.parse(characterResponse.body);
      return `- ${character.name}`;
    });

    // Wait for all promises to resolve
    const characterResults = await Promise.all(characterPromises);

    // Display characters for the movie
    console.log(`Characters for ${movie.title} (Episode ${movie.episode_id}):`);
    console.log(characterResults.join('\n'));
  } catch (error) {
    console.error('Error:', error);
  }
}

// Promisified version of the request function
function promisifiedRequest(url) {
  return new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
      if (error) {
        reject(error);
      } else {
        resolve({ response, body });
      }
    });
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
