const request = require('request');

const apiUrl = process.argv[2];

if (!apiUrl) {
  console.error('Please provide the API URL as a command line argument.');
  process.exit(1);
}

// Character ID for "Wedge Antilles"
const wedgeAntillesId = 18;

// Make a GET request to the Star Wars API films endpoint
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    process.exit(1);
  }

  if (response.statusCode === 200) {
    const filmsData = JSON.parse(body);
    
    // Filter films where "Wedge Antilles" is present
    const filmsWithWedge = filmsData.results.filter((film) => {
      const characterIds = film.characters.map((character) => parseInt(character.match(/\/(\d+)\/$/)[1]));
      return characterIds.includes(wedgeAntillesId);
    });

    console.log(`${filmsWithWedge.length}`);
  } else {
    console.error(`Error: Received status code ${response.statusCode} from the API.`);
  }
});
