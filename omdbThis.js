module.exports = function(){
  var request = require("request");
  var movie = process.argv[3];
  /*if(movie === undefined){
    movie === 'Mr. Nobody';
    Doesn't work ^^^*/
  }
  request("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&r=json&tomatoes=true", function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var movieChoice = JSON.parse(body);
      console.log(movieChoice.Title);
      console.log(movieChoice.Year);
      console.log(movieChoice.imdbRating);
      console.log(movieChoice.Country);
      console.log(movieChoice.Language);
      console.log(movieChoice.Plot);
      console.log(movieChoice.Actors);
      console.log(movieChoice.tomatoRating);
      console.log(movieChoice.tomatoURL);
      fs.appendFile("log.txt", movieChoice.Title, (err) => {
    if (err) throw err;
    console.log("data added");
});
    }
  });
}