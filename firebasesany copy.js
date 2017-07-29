
// Set the configuration for your app
(function() {
  var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
  var firebase = require("firebase");
  const config = {
    apiKey: "AIzaSyA8FE1ouJQmpnNe0Do4XT-cmFuxJFVBRcw",
    authDomain: "bord-66644.firebaseapp.com",
    databaseURL: "https://bord-66644.firebaseio.com",
    storageBucket: "bord-66644.appspot.com"
  };
  firebase.initializeApp(config);

  var defaultApp = firebase.initializeApp(config);
  if(defaultApp.name.length == 0){
    console.log("Rip")
  }
  else{
    console.log(defaultApp.name);
  }
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");


  /* Random Firebase stuff
  const preObject = document.getElementById('object');
  const dbRefObject = firebase.database().ref().child("object");

  dbRefObject.on('value', snap=> console.log(snap.val()));
  console.log(preObject);
  console.log(dbRefObject);


*/
}());
