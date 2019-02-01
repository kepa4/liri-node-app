require('dotenv').config();
var axios = require('axios');
var Spotify = require('node-spotify-api');
var keys = require('./keys.js');

var spotify = new Spotify(keys.spotify);
var input = '';

for (var i = 3; i < process.argv.length; i++) {
  input += process.argv[i] + ' ';
}

input = input.trim();

switch (process.argv[2]) {
  case 'spotify-this-song':
    searchSong(input);
    break;
  case 'concert-this':
    searchConcert(input);
    break;
  case 'movie-this':
    searchMovie(input);
    break;
  case 'do-what-it-says':
    doSomething();
    break;
  default:
    console.log(process.argv[2], 'is not a valid command!');
    break;
}

function searchSong(input) {
  spotify.search(
    {
      type: 'track',
      query: input,
      limit: 5,
    },
    function(err, response) {
      console.log(response.tracks.items[0].artists[0].name);
      console.log(response.tracks.items[0].name);
      console.log(response.tracks.items[0].preview_url);
      console.log(response.tracks.items[0].album.name);
    },
  );
}

function searchConcert(input) {
  var artist = input.replace(' ', '+');
  axios
    .get(
      'https://rest.bandsintown.com/artists/' +
        artist +
        '/events?app_id=codingbootcamp',
    )
    .then(function(response) {
      for (var i = 0; i < response.data.length; i++) {
        var data = response.data[i];
        console.log('========================');
        console.log(data.venue.name);
        console.log(data.venue.city, data.venue.region, data.venue.country);
      }
    });
}