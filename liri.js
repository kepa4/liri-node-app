require('dotenv').config();
var axios = require('axios');
var Spotify = require('node-spotify-api');
var keys = require('./keys.js');
var moment = require('moment');
var fs = require('fs');

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
  var song = input;
  if (input === '') {
    song = 'The Sign Ace of Base';
  }
  song.replace(' ', '+');
  spotify.search(
    {
      type: 'track',
      query: song,
      limit: 5,
    },
    function(err, response) {
      console.log('Artist:', response.tracks.items[0].artists[0].name);
      console.log('Track Name:', response.tracks.items[0].name);
      console.log('Preview Url:', response.tracks.items[0].preview_url);
      console.log('Album Name:', response.tracks.items[0].album.name);
    },
  );
}

function searchConcert(input) {
  var artist = input;
  if (artist === '') {
    artist = 'Thrice';
  } else {
    artist = artist.replace(' ', '+');
  }
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
        console.log('Venue:', data.venue.name);
        console.log(
          'Location:',
          data.venue.city,
          data.venue.region,
          data.venue.country,
        );
        console.log('Date:', moment(data.datetime).format('MM/DD/YYYY'));
      }
    });
}

function searchMovie(input) {
  var movie = input;
  if (movie === '') {
    movie = 'Mr. Nobody';
  }
  movie.replace(' ', '+');
  movie.replace('.', '');
  axios
    .get('http://www.omdbapi.com/?apikey=trilogy&t=' + movie)
    .then(function(response) {
      console.log('Title:', response.data.Title);
      console.log('Year:', response.data.Year);
      console.log('imdb rating:', response.data.imdbRating);
      console.log(
        response.data.Ratings[1].Source + ': ' + response.data.Ratings[1].Value,
      );
      console.log('Country:', response.data.Country);
      console.log('Language:', response.data.Language);
      console.log('Plot:', response.data.Plot);
      console.log('Actors:', response.data.Actors);
    });
}

function doSomething(input) {
	fs.readFile('./random.txt', 'utf-8', function(err, data) {
		var array = data.split(' ');
		var song = array.slice(1).join("+");
		spotify.search(
    	{
      	type: 'track',
      	query: song,
      	limit: 5,
    	},
    	function(err, response) {
      	console.log('Artist:', response.tracks.items[0].artists[0].name);
      	console.log('Track Name:', response.tracks.items[0].name);
     	 	console.log('Preview Url:', response.tracks.items[0].preview_url);
      	console.log('Album Name:', response.tracks.items[0].album.name);
    	},
  	);

		
	});
		
}
