var Spotify = require('node-spotify-api');
require('dotenv').config()
var fs = require('fs');
var spotify = new Spotify({
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
});



if( process.argv[2] === "spotify-this") {
    var songInput = process.argv.splice(3, process.argv.length).join(' ');


    spotify.search({ type: 'track', query: songInput }, function(err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
    

    // console.log(data.tracks.items[0]); 
    console.log("Song name : " + data.tracks.items[0].name);
    console.log("Preview URL : " + data.tracks.items[0].preview_url);
    console.log("Album : " + data.tracks.items[0].album.name);
    console.log("Artist name: " + data.tracks.items[0].artists[0].name);
    });

} else if ( process.argv[2] === "doRandom"){

    fs.readFile('./random.txt', 'utf8', function(err, data){
        console.log(data.split(","));
    })
}