var express = require('express')
var app = express()
var firebase = require("firebase");
var a = 1;

  var config = {
    apiKey: "AIzaSyBBOTuSYxQqC04gXbcJZtEGfMqgqol6baw",
    authDomain: "timeapp-dd8fb.firebaseapp.com",
    databaseURL: "https://timeapp-dd8fb.firebaseio.com",
    storageBucket: "timeapp-dd8fb.appspot.com",
    messagingSenderId: "281481761835"
  };
  firebase.initializeApp(config);

  
app.get('/', function (req, res) {
  res.send('Arun World!' +"#"+ a);
  console.log(a, "connection");
})

app.listen(3000, function () {
  console.log('Listening to port 3000!')
})

