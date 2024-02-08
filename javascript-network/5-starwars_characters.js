const request = require('request');

async function getCharactersForMovie(movieId) {
  const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;
  try {
    
    const movieResponse = await promisifiedRequest(apiUrl);
    const movie = JSON.parse(movieResponse.body);
    const characterPromises = movie.characters.map(async (characterUrl) => {
     
      const characterResponse = await promisifiedRequest(characterUrl);
      const character = JSON.parse(characterResponse.body);
      return `- ${character.name}`;
    });

    const characterResults = await Promise.all(characterPromises);
   
    console.log(`Characters for ${movie.title} (Episode ${movie.episode_id}):`);
    console.log(characterResults.join('\n'));
  } catch (error) {
    console.error('Error:', error);
  }
}
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
const movieId = process.argv[2];

if (!movieId) {
  console.error('Error: Movie ID is missing. Please provide a Movie ID as a command line argument.');
  process.exit(1);
}


getCharactersForMovie(movieId);
