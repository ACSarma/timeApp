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

app.get('/json', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ a: 1 }, null, 3));
  console.log(a, "JSON Res sent");
})

app.listen(3000, function () {
  console.log('Listening to port 3000!')
})

