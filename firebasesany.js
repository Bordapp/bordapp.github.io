
// Set the configuration for your app
(function() {
  var firebase = require("firebase");
  const config = {
    apiKey: "AIzaSyA8FE1ouJQmpnNe0Do4XT-cmFuxJFVBRcw",
    authDomain: "bord-66644.firebaseapp.com",
    databaseURL: "https://bord-66644.firebaseio.com",
    storageBucket: "bord-66644.appspot.com"
  };
  firebase.initializeApp(config);

  var defaultApp = firebase.initializeApp(defaultAppConfig);
  if(defaultApp.length == 0){
    console.log(":(")
  }else{
    console.log(defaultApp.name);
  }
  /* Random Firebase stuff
  const preObject = document.getElementById('object');
  const dbRefObject = firebase.database().ref().child("object");

  dbRefObject.on('value', snap=> console.log(snap.val()));
  console.log(preObject);
  console.log(dbRefObject);



}()); */
