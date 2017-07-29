
// Set the configuration for your app
(function() {

  const config = {
    apiKey: "AIzaSyA8FE1ouJQmpnNe0Do4XT-cmFuxJFVBRcw",
    authDomain: "bord-66644.firebaseapp.com",
    databaseURL: "https://bord-66644.firebaseio.com",
    projectId: "bord-66644",
    storageBucket: "bord-66644.appspot.com"
  };
  firebase.initializeApp(config);
  firebase.intialize


  //Random Firebase shit
  const preObject = document.getElementById('object');
  const dbRefObject = firebase.database().ref().child("object");

  dbRefObject.on('value', snap=> console.log(snap.val()));
  console.log(preObject);
  console.log(dbRefObject);



  }());
