module.exports = function(){ 
  var twitter = require("twitter");
  var tweet = process.argv[3];
  var keys = require("./keys.js");
  var twitterConsKey = twitterKeys.consumer_key;
  var twitterSecret = twitterKeys.consumer_secret;
  var twitterTokKey = twitterKeys.access_token_key;
  var twitterTokSecret = twitterKeys.access_token_secret;
  var twitt = new Twitter({
    consumer_key: twitterConsKey,// Z3QfissfGjeuKVeq3g8euzb5o,
    consumer_secret: twitterSecret, //AfvJKhwfWvNwhsn2Iu6JZPI8zebcUdphxUN1nlDsdwNTHEVkZs
  access_token_key: twitterTokKey, //3141415469-OhDw1C3W2w5XkrDVE0T1UHNhulPZAVieZCgNKNY,
     access_token_secret: twitterTokSecret //FiKNZlfFcLhc94NZbTKzoR8wCdDgjkPw9y8LjJaP3r3xz
  });
  twitt.get('statuses/user_timeline', function(error, tweets, response){
    if(error) throw error;
    //List 20 most recent tweets
    for(var i = 0; i < 21; i++){
    console.log(tweets[i].text);  
    }
  });
}