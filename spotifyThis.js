module.exports = function(){
  var spotify = require('spotify');
  var song = process.argv[3];

  spotify.search({ type: 'track', query: song || 'baby'}, function(err, data){
    if (err) {
      return;
    }
    console.log(data.tracks.items[0].artists[0].name);
    console.log(data.tracks.items[0].preview_url);
    console.log(data.tracks.items[0].album.name);
    console.log(data.tracks.items[0].external_urls.spotify);
    console.log(data.tracks.items[0].name); 
  });
}