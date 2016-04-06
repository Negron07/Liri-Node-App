var fs = require("fs");
var task = process.argv[2];
var myTweets = require("./myTweets.js");
var spotifyThis = require("./spotifyThis.js");
var omdbThis = require("./omdbThis.js");

function runMyApp(){
  fs.appendFile("log.txt", task + ", ", (err) => {
    if (err) throw err;
    console.log("data added");
  });
  //the command to run the program 
  switch(task){
    case "myTweets":
      result = myTweets();
      break;
    case "spotifyThis":
      result = spotifyThis();
      break;
    case "movieThis":
      result = omdbThis();
      break;
    case "do-what-it-says":
      result = doWhatever();
      break;
  }
}
function doWhatever(){
  fs.readFile("random.txt", "utf8", function(error, data){
      var splitIt = data.split(" ");
      task = (splitIt[0]);
      process.argv[3] = (splitIt[1]);
      doWhatever();
  });
}
runMyApp();